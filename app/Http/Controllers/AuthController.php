<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\CustomFileSystem;
use Illuminate\Http\Request;

class AuthController extends Controller
{
	/**
	 * Create a new AuthController instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth:api', ['except' => ['login', 'signup']]);
	}

	/**
	 * Create user & get a JWT via given credentials.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function signup(Request $request)
	{
		$validator = validator(
			$request->all(),
			[
				"email" => "email|unique:App\User,email|string|required",
				"password" => "string|min:8|required",
				"phone_number" => "string",
				"first_name" => "string|max:50",
				"last_name" => "string|max:50",
				"country" => "string",
				"full_address" => "string",
				"genre" => "string|max:1",
			]
		);

		if (!$validator->fails()) {
			$credentials = $validator->validate();
			$credentials['password'] = Hash::make($credentials['password']);

			User::create($credentials);

			CustomFileSystem::createDirectory([
				'disk' => 'users',
				'path' => '/',
				'name' =>  $credentials['email']
			]);

			$credentials = $validator->validate();

			if (!$token = auth('api')->attempt($credentials)) {
				return response([
					"message" => ['Unauthorized'],
				], 401);
			}

			return $this->respondWithToken($token);
		} else {
			return response([
				"data" => [],
				"messages" => $validator->messages(),
				"message" => "Can't sign up!"
			], 402);
		}
	}

	/**
	 * Get a JWT via given credentials.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function login(Request $request)
	{
		$validator = validator(
			$request->all(),
			[
				'email' => "email|string|required",
				'password' => 'string|min:8|required'
			]
		);

		if (!$validator->fails()) {
			$credentials = $validator->validate();

			if (!$token = auth('api')->attempt($credentials)) {
				return response([
					"message" => ['Unauthorized'],
				], 401);
			}

			return $this->respondWithToken($token);
		} else {
			return response([
				"data" => [],
				"messages" => $validator->messages(),
				"message" => "Can't login!"
			], 402);
		}
	}

	/**
	 * Get the authenticated User.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function me()
	{
		return response()->json(auth('api')->user());
	}

	/**
	 * Log the user out (Invalidate the token).
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function logout()
	{
		auth('api')->logout();

		return response()->json(['message' => 'Successfully logged out']);
	}

	/**
	 * Refresh a token.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function refresh()
	{
		return $this->respondWithToken(auth('api')->refresh());
	}

	/**
	 * Get the token array structure.
	 *
	 * @param  string $token
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function respondWithToken($token)
	{
		return response()->json([
			'access_token' => $token,
			'user' => $this->guard()->user(),
			'token_type' => 'bearer',
			'expires_in' => auth('api')->factory()->getTTL() * 60
		]);
	}

	public function guard()
	{
		return Auth::Guard('api');
	}
}
