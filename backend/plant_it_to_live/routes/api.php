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
    Route::post('addplant',[AdminController::class,'addplant']);//add new plant to the user
    Route::get('plants',[AdminController::class,'plants']);
    Route::get('plant',[AdminController::class,'plant']);
    Route::post('editplant',[AdminController::class,'editplant']);
    Route::get('deleteplant',[AdminController::class,'deleteplant']);
    Route::get('export', [AdminController::class, 'export']);
    Route::get('/download/{fileName}', [AdminController::class,'download']);
    Route::post('changepassword',[AdminController::class,'changepassword']);//change admin password using old password
    Route::get('forgetpassword', [AdminController::class, 'forgetpassword']);//send email to admin with url for reset password form
    Route::post('resetpassword', [AdminController::class, 'resetpassword'])->name('adminresetpassword');//reset password form
});
Route::group(['prefix'=>'/'],function()
{
    Route::post('login',[UserController::class,'login']);//login user
    Route::post('signup',[UserController::class,'signup']);//signup user
    Route::post('edit',[UserController::class,'edit']);//edit_user_name and email
    Route::get('delete',[UserController::class,'delete']);//delete user
    Route::get('user',[UserController::class,'user']);//return the user data
    Route::get('logout',[UserController::class,'logout']);//logout the user
//--------------------------------------------AI Integration-----------------------------------------------------------//
    Route::Post('sendRequestToCropRecommendation',[CroprecommendationController::class,'sendRequestToCropRecommendation']);
    Route::Post('sendRequestToDiseasesDetection',[DiseasesDetectionController::class,'sendRequestToDiseasesDetection']);
//------------------------------------------------------Google---------------------------------------------------------------//
    Route::get('activate', [UserController::class, 'activate'])->name('activate');//active user account
    Route::post('forgetpassword', [UserController::class, 'forgetpassword']);//send email to user with url for reset password form
    Route::post('resetpassword', [UserController::class, 'resetpassword'])->name('resetpassword');//reset password form
    Route::get('auth/google', [UserController::class, 'redirectToGoogle'])->middleware('web');//redir to google
    Route::get('/auth/google/callback', [UserController::class, 'handleGoogleCallback'])->middleware('web');
});

