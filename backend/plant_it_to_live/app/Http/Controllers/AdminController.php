<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Models\User;
use App\Models\Admin;
use Firebase\JWT\JWK;
use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Tymon\JWTAuth\JWTGuard;
use Illuminate\Http\Request;
use App\Mail\AdminChangePassword;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Exports\PlantsExport;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
class AdminController extends Controller
{
    //
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['login','forgetpassword','resetpassword','download']]);

    }
    public function home()
    {
        $data=Admin::find(Auth()->user()->id);
        return $this->SuccessResponse($data);
    }
    public function login(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
           // return $this->response($validator->errors(), 'Validation errors', 406);
           return $this->validationerrors($validator->errors());
        }

        // Attempt authentication
        if (! $token = auth('admin')->attempt($validator->validated())) {
           // return response('',404);
         return $this->failed("your login falid try aging with correct email and pasword");
            //return response()->json(['error' => 'Unauthorized'], 401);
        }
       // return response(['token'=>$token],200);
       return $this->SuccessResponse(['token'=>$token]);
    }
    //get all  users
    public function users()//get all active users ;
    {
        $users=User::paginate(50);//get only 50 users
        $totalUsersCount = User::count();
        return $this->SuccessResponse([
            'users count'=>$totalUsersCount,
            'users'=>$users
        ]);
    }
    //edit users
    public function edit(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'access_Key'=>'required|exists:admins,access_Key',
            'name'=>'required',
            'email' => 'required|email',
        ]);
        if ($validator->fails()) {
            // return $this->response($validator->errors(), 'Validation errors', 406);
            return $this->validationerrors($validator->errors());
         }
        $admin=Admin::find(auth()->user()->id);
        $admin->name=$validator->validated()['name'];
        $admin->email=$validator->validated()['email'];
        if($admin->save())
            return $this->SuccessResponse(null,"data is updated");
        return $this->failed("can't edit this user now try agin");
        }
        public function forgetpassword(Request $request)//get email from the forget password
    {
        $validator=Validator::make($request->all(),
        [
            'email' => 'required|email|exists:admins,email'
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $user=Admin::where('email',$request->email)->first();
        if(!$user)
        {
            return $this->failed('Email not found');
        }
        //token
        $token = Str::random(64);
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $request->email],
            ['token' => $token, 'created_at' => now()]
        );
        Mail::to($user->email)->send(new AdminChangePassword($name=$user->name,$token));
        return $this->SuccessResponse("Password reset email sent successfully.");

    }
    public function resetpassword(Request $request)
    {
        $validator=Validator::make($request->all(),
        [
            'token' => 'required|exists:password_reset_tokens,token',
            'access_Key'=>'required|exists:admins,access_Key',
            'password' => 'required|min:6',
            'confirm_password'=>'required|required|min:6|same:password',
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $data=DB::table('password_reset_tokens')->where('token',$request->token)->first();
        if(!$data)
        {
            return $this->failed('Not found');
        }
        $user=Admin::where('email',$data->email)->first();
        if(!$user)
        {
            return $this->failed('Email Not found');
        }
        $user->password = bcrypt($request->password);
        $user->save();
       DB::table('password_reset_tokens')->where('email',$user->email)->delete();
       $token= JWTAuth::fromUser($user);
       return $this->SuccessResponse(['token'=>$token],"Password Saved successfully.");

    }
    public function changepassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'access_Key'=>'required|exists:admins,access_Key',
            'oldpassword'=>'required',
            'password' => 'required|min:6|confirmed',
        ]);
        if ($validator->fails()) {
            // return $this->response($validator->errors(), 'Validation errors', 406);
            return $this->validationerrors($validator->errors());
         }
         if($validator->validated()['oldpassword']===$validator->validated()['password'])
            return $this->failed("The new password must not match the old password");
         $user=Admin::find(Auth()->user()->id);
         if(Hash::check($validator->validated()['oldpassword'], $user->password))
           {
                $user->password=bcrypt($validator->validated()['password']);
                return  ($user->save())?  $this->SuccessResponse(null,"password is updated"):$this->failed("Try agin later");
           }
        else
        {
            return $this->failed("please check the old password");
        }
    }
    public function addplant(Request $request)
    {
        //validation
        $validator=Validator::make($request->all(),[
            'common_name'=>'required|string',
            'scientific_name'=>'required|string',
            'watering'=>'required|string',
            'fertilizer'=>'required|string',
            'sunlight'=>'required|string',
            'pruning'=>'required|string',
            'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg',
            'water_amount'=>'required|string',
            'fertilizer_amount'=>'required|string',
            'sun_per_day'=>'required|string',
            'soil_salinty'=>'required|string',
            'appropriate_season'=>'required|string',
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $plant=new Plant();
        $plant->common_name=$request->common_name;
        $plant->scientific_name=$request->scientific_name;
        $plant->watering=$request->watering;
        $plant->fertilizer=$request->fertilizer;
        $plant->sunlight=$request->sunlight;
        $plant->pruning=$request->pruning;
        $plant->water_amount=$request->water_amount;
        $plant->fertilizer_amount=$request->fertilizer_amount;
        $plant->sun_per_day=$request->sun_per_day;
        $plant->soil_salinty=$request->soil_salinty;
        $plant->appropriate_season=$request->appropriate_season;
        $img=$request->file('img');
        $filename=time().'.'.$img->getClientOriginalExtension();
        $img->move(public_path('plantImges'),$filename);
        $filepath = 'C:\\xampp\\htdocs\\plant-it-to-live\\backend\\plant_it_to_live\\public\\plantImges\\' . $filename;
        $plant->img = $filepath;
        $plant->admin_id=Auth()->user()->id;
        $plant->save();
        return $this->SuccessResponse();
    }
    public function plants()//get all admin plants
    {
        $plants=Plant::where('admin_id',Auth()->user()->id)->paginate(50);
        $plants->makeHidden(['admin_id','updated_at']);
        return $this->SuccessResponse($plants);
    }
    //single plant
    public function plant(Request $request)
    {

        $plant=Plant::find($request->id);
        if(!$plant)
        {
            return $this->failed("Plant not found");
        }
        return $this->SuccessResponse($plant);
    }
    //edit plant
    public function editplant(Request $request)
    {
        //validation
        $validator=Validator::make($request->all(),[
            'id'=>'required|exists:plants,id',
            'common_name'=>'required|string',
            'scientific_name'=>'required|string',
            'watering'=>'required|string',
            'fertilizer'=>'required|string',
            'sunlight'=>'required|string',
            'pruning'=>'required|string',
            'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg',
            'water_amount'=>'required|string',
            'fertilizer_amount'=>'required|string',
            'sun_per_day'=>'required|string',
            'soil_salinty'=>'required|string',
            'appropriate_season'=>'required|string',
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $plant=Plant::find($request->id);
        $filePath = $plant->img; // Assuming $plant->img contains the relative path
        unlink($filePath);
        $plant->common_name=$request->common_name;
        $plant->scientific_name=$request->scientific_name;
        $plant->watering=$request->watering;
        $plant->fertilizer=$request->fertilizer;
        $plant->sunlight=$request->sunlight;
        $plant->pruning=$request->pruning;
        $plant->water_amount=$request->water_amount;
        $plant->fertilizer_amount=$request->fertilizer_amount;
        $plant->sun_per_day=$request->sun_per_day;
        $plant->soil_salinty=$request->soil_salinty;
        $plant->appropriate_season=$request->appropriate_season;
        $img=$request->file('img');
        $filename=time().'.'.$img->getClientOriginalExtension();
        $filepath='plantImges/'.$filename;
        $img->move(public_path('plantImges'),$filename);
        // Concatenate the base URL with the path to the uploaded image
        $filepath = 'C:\\xampp\\htdocs\\plant-it-to-live\\backend\\plant_it_to_live\\public\\plantImges\\' . $filename;
        $plant->img = $filepath;
        $plant->save();
        return $this->SuccessResponse();
    }
    public function deleteplant(Request $request)//delete the plant
    {
        //validation
        $validator=Validator::make($request->all(),[
            'id'=>'required|exists:plants,id'
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $plant=Plant::find($request->id);
        $filePath = $plant->img; // Assuming $plant->img contains the relative path
        unlink($filePath);
       if(!$plant->delete())
           return $this->failed("try again");
        return $this->SuccessResponse();
    }
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully loged out']);
    }
    public function export(Request $request)
    {
        $fileName = 'plants.xlsx'; // You can generate a dynamic file name if needed
        $filePath = storage_path('app/' . $fileName);

        // Delete the old file if it exists


        Excel::store(new PlantsExport, $fileName);

        return $this->SuccessResponse([  'download_link' => url('/api/admin/download/' . $fileName)]);
    }
    public function download($fileName)
    {
        $filePath = storage_path('app/' . $fileName);

        return new BinaryFileResponse($filePath, 200, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ]);
    }

}
