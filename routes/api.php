<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
*/

Route::group(['prefix' => 'auth'], function () {
	// Auth
	Route::post('signup', 'AuthController@signup');
	Route::post('login', 'AuthController@login');
	Route::post('logout', 'AuthController@logout');
	Route::post('refresh', 'AuthController@refresh');
	Route::post('me', 'AuthController@me');
});

Route::middleware('auth:api')->prefix('demo')->group(function () {
	Route::get('/logo-themes', 'DashboardDemoController@getLogoThemesPath');
});

Route::apiResource('users', 'UserController')->middleware('auth:api');
Route::apiResource('organizations', 'OrganizationController')->middleware('auth:api');
Route::apiResource('documents', 'DocumentController')->middleware('auth:api');
