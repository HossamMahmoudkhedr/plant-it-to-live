<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Mail\UserAccountActivation;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['login','signup','activate']]);

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
        if (! $token = auth('user')->attempt($validator->validated())) {
           // return response('',404);
           return $this->failed("your login falid try aging with correct email and pasword");
            //return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = auth('user')->user();
        if (!$user->activated) {
            // If the user account is not activated, return an error response
            return $this->failed("Your account is not activated. Please check your email for activation instructions.");
        }
       // return response(['token'=>$token],200);
       return $this->SuccessResponse(['token'=>$token]);
    }
    public function signup(Request $request)
    {
        $minAgeDate = Carbon::now()->subYears(10)->format('Y-m-d');
        $validator = Validator::make($request->all(), [
            //
            'name'=>'required|max:50|string',
            'email' => 'required|email|unique:users,email,id',
            'password' => 'required|min:6',
            'confirm_password'=>'required|required|min:6|same:password',
            'phone'=>'numeric|min:10',
            'b_date'=>'date|before_or_equal:' . $minAgeDate,
            'gender'=>'in:male,female,Male,Female',
            'picture' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        if ($validator->fails()) {
            // return $this->response($validator->errors(), 'Validation errors', 406);
            return $this->validationerrors($validator->errors());
         }
         $user= new User();
         $user->name=$request->name;
         $user->email=$request->email;
         $user->password=bcrypt($request->password);
         if(isset($request->phone)) $user->phone=$request->phone;
         if(isset($request->b_date)) $user->b_date=$request->b_date;
         if(isset($request->gender))
         {
            if($request->gender==='Male'||$request->gender==='male')
                $user->gender= 1;
            else  $user->gender= 0;
         }
         if(isset($request->picture)) {
            $picture = $request->file('picture');
            $fileName = time() . '_' .$request->name . rand(1,1000) . '.' . $picture->extension();
            $filePath = 'pictures/' . $fileName; // Relative path from the public directory
            $picture->move(public_path('pictures'), $fileName);
            // Get the base URL of your application
            $baseUrl = url('/');
            // Concatenate the base URL with the path to the uploaded image
            $fullPath = $baseUrl . '/' . $filePath;

            $user->picture = $fullPath;
        }

        if($user->save())
        {
            $token = Crypt::encryptString($user->id . '|' . now()->addMinutes(60));
            Mail::to($user->email)->send(new UserAccountActivation($user,$token));
            return $this->SuccessResponse('','check your email please to activate your account');
        }
        else
          return $this->failed();
    }
    public function activate(Request $request)
    {
        $token = $request->input('token');
        $decryptedToken = Crypt::decryptString($token);
        [$userId, $expiration] = explode('|', $decryptedToken);
        if (now() <= $expiration) {
            $user = User::find($userId);
            if (!$user) {
                return $this->failed('user not found');
            }
            if ($user->activated) {
                return $this->failed('this accout is aready activated');
            }
            $user->activated = true;
            $user->save();
            return $this->SuccessResponse('','Activated');
        } else {
            return $this->failed();
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully loged out']);
    }
}
