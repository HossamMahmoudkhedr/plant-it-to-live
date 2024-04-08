<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Traits\ApiResponse;
class AdminController extends Controller
{
    //
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['login']]);

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
           return $this->falied("your login falid try aging with correct email and pasword");
            //return response()->json(['error' => 'Unauthorized'], 401);
        }
       // return response(['token'=>$token],200);
       return $this->SuccessResponse(['token'=>$token]);
    }
    //get all active users
    public function active_user()
    {

    }
    //get all unactive users
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
