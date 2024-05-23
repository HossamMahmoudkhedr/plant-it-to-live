<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\SocialiteController;

Route::group(['middleware' => ['web']], function () {
    Route::get('/auth/google/redirect', [SocialiteController::class, 'redirectToGoogle']);
    Route::get('/auth/google/callback', [SocialiteController::class, 'handleGoogleCallback']);
});
