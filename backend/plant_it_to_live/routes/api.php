<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix'=>'admin'],function()
{
    Route::post('login',[AdminController::class,'login']);//log admin
    Route::get('logout',[AdminController::class,'logout']);//logout admin
    Route::get('home',[AdminController::class,'home']);//return admin data
    Route::get('users',[AdminController::class,'users']);//get all users
    Route::post('edit',[AdminController::class,'edit']);//edit admin name and email
    //edit password
});
Route::group(['prefix'=>'/'],function()
{
    Route::post('login',[UserController::class,'login']);//login
    Route::get('logout',[UserController::class,'logout']);//logout
    Route::get('home',[UserController::class,'home']);//return  data
   // Route::get('users',[UserController::class,'users']);//get all users
    Route::post('edit',[UserController::class,'edit']);//edit admin name and email
    //edit password
});

