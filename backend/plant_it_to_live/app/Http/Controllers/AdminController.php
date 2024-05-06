<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\AdminChangePassword;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['login','forgetpassword','resetpassword']]);

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
       return $this->SuccessResponse("Password Saved successfully.");

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

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully loged out']);
    }

}
