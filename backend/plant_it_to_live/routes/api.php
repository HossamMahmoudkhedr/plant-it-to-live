<?php

use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DiseasesDetectionController;
use App\Http\Controllers\CroprecommendationController;
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
Route::get('unauthenticated',function()
{
    return response()->json(
        [
            'sucess'=>false,
            'massage'=>'Unauthenticated',
        ],401);
})->name('unauthenticated');

Route::group(['prefix'=>'admin'],function()
{
    Route::post('login',[AdminController::class,'login']);//log admin
    Route::get('logout',[AdminController::class,'logout']);//logout admin
    Route::get('home',[AdminController::class,'home']);//return admin data
    Route::get('users',[AdminController::class,'users']);//get all users
    Route::post('edit',[AdminController::class,'edit']);//edit admin name and email
    Route::post('changepassword',[AdminController::class,'changepassword']);//change admin password using old password
    Route::get('forgetpassword', [AdminController::class, 'forgetpassword']);//come from find email form
    Route::post('resetpassword', [AdminController::class, 'resetpassword'])->name('adminresetpassword');//
    //edit password
});
Route::group(['prefix'=>'/'],function()
{
    Route::post('login',[UserController::class,'login']);//login
    Route::post('signup',[UserController::class,'signup']);//return  data
    Route::post('edit',[UserController::class,'edit']);//edit user name and email
    Route::get('delete',[UserController::class,'delete']);//delete user
    Route::get('user',[UserController::class,'user']);//return the user data
    Route::get('logout',[UserController::class,'logout']);//logout
//--------------------------------------------AI Integration-----------------------------------------------------------//
    Route::Post('sendRequestToCropRecommendation',[CroprecommendationController::class,'sendRequestToCropRecommendation']);
    Route::Post('sendRequestToDiseasesDetection',[DiseasesDetectionController::class,'sendRequestToDiseasesDetection']);
//---------------------------------------------------------------------------------------------------------------------//
    Route::post('activate', [UserController::class, 'activate'])->name('activate');//active user account using email
    Route::post('forgetpassword', [UserController::class, 'forgetpassword']);//come from find email form
    Route::post('resetpassword', [UserController::class, 'resetpassword'])->name('resetpassword');//
    //Route::get('googlelog',[UserController::class, 'googlelog'])->name('googlelog');
    Route::get('auth/google', [UserController::class, 'redirectToGoogle'])->middleware('web');
    Route::get('/auth/google/callback', [UserController::class, 'handleGoogleCallback'])->middleware('web');
});

