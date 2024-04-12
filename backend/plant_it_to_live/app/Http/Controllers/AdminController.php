<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //
    use ApiResponse;
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['login']]);

    }
    public function home()
    {
        $data=Admin::find(auth()->user()->id)->first();
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
           return $this->falied("your login falid try aging with correct email and pasword");
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
        return $this->falied("can't edit this user now try agin");
        }
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully loged out']);
    }
}
