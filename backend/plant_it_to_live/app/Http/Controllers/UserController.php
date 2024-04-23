<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use App\Models\Admin;
use App\Mail\ResetPassword;
use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Mail\UserAccountActivation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['login','signup','activate','forgetpassword','resetpassword','redirectToGoogle','handleGoogleCallback']]);

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
            'confirm_password'=>'required|required|same:password',
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
            $fileName = time() . '_' .Str::random(10). rand(1,1000) . '.' . $picture->extension();
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
    public function edit(Request $request)
     {
        $minAgeDate = Carbon::now()->subYears(10)->format('Y-m-d');
        $validator = Validator::make($request->all(), [
            //
            'name'=>'required|max:50|string',
            'email' => 'required|email',
            'phone'=>'numeric|min:10',
            'b_date'=>'date|before_or_equal:' . $minAgeDate,
            'gender'=>'in:male,female,Male,Female',
            'picture' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        if ($validator->fails()) {
            // return $this->response($validator->errors(), 'Validation errors', 406);
            return $this->validationerrors($validator->errors());
         }
         $user=User::find(Auth()->user()->id);
         $user->name=$request->name;
         $user->email=$request->email;
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
            $fileName = time() . '_' .Str::random(10). rand(1,1000) . '.' . $picture->extension();
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
            return $this->SuccessResponse('','User Sucessfuly Updated');
        }
        return $this->failed();
     }
     public function user()
     {
        $user=User::find(Auth()->user()->id);
       $user->makeHidden(['google_id','activated','created_at','updated_at']);
        if($user)
        {
            if($user->gender==1)
                $user->gender="male";
            else if($user->gender==2)
                $user->gender="female";
            return $this->SuccessResponse($user,'All user data.');
        }
        return $this->failed();
     }
     public function delete()
     {
        $user=User::find(auth()->user()->id);
        if (!$user) {
            return $this->failed('User not found');
        }
        if( $user->delete())
        {
            return $this->SuccessResponse('','User Sucessfuly Deleted');
        }
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
    public function forgetpassword(Request $request)//get email from the forget password
    {
        $validator=Validator::make($request->all(),
        [
            'email' => 'required|email|exists:users,email'
        ]);
        if($validator->fails())
        {
            return $this->validationerrors($validator->errors());
        }
        $user=User::where('email',$request->email)->first();
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
        Mail::to($user->email)->send(new ResetPassword($name=$user->name,$token));
        return $this->SuccessResponse("Password reset email sent successfully.");

    }
    public function resetpassword(Request $request)
    {
        $validator=Validator::make($request->all(),
        [
            'token' => 'required|exists:password_reset_tokens,token',
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
        $user=User::where('email',$data->email)->first();
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
            'oldpassword'=>'required',
            'password' => 'required|min:6|confirmed',
        ]);
        if ($validator->fails()) {
            // return $this->response($validator->errors(), 'Validation errors', 406);
            return $this->validationerrors($validator->errors());
         }
         if($validator->validated()['oldpassword']===$validator->validated()['password'])
            return $this->failed("The new password must not match the old password");
         $user=User::find(Auth()->user()->id);
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
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
            // Retrieve user details from Google
            $user = Socialite::driver('google')->user();
            // Check if the user exists in your database or create a new user
            $visitor = User::where('email', $user->getEmail())->first();
            if (!$visitor) {
                // If the user doesn't exist, create a new user
                $visitor = new User();
                $visitor->google_id=$user->getId();
                $visitor->name = $user->getName();
                $visitor->email = $user->getEmail();
                $visitor->picture=$user->getAvatar();
                $visitor->activated = true;
                $visitor->save();
            }
            Auth::guard('user')->login($visitor);
            $token = JWTAuth::fromUser($visitor);
            return $this->SuccessResponse(['token' => $token])->withCookie(Cookie::make('token', $token,5));// here we will re
    }
    public function googlelog()
    {
        $user=Auth()->user();
        $token = auth()->refresh();
        return $this->SuccessResponse(['token' => $token]);
    }



}
