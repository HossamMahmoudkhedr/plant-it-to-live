<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['login']]);

    }
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully loged out']);
    }
}
