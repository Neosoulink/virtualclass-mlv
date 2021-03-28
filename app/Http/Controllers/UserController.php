<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
	public function __construct()
	{
		$this->authorizeResource(User::class, 'user');
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return Response()->json(User::all());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validator = validator(
			$request->all(),
			[
				"email" => "email|string|required",
				"password" => "password|string|required",
				"phone_number" => "string",
				"first_name" => "string|max:50",
				"last_name" => "string|max:50",
				"country" => "string",
				"full_address" => "string",
				"genre" => "string|max:1",
			]
		);

		if ($validator->fails()) {
			return response($validator->messages(), 402);
		} else {
			return response([
				"data" => User::create($request->all()),
				"message" => "User created!"
			]);
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function show(User $user)
	{
		return $user;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, User $user)
	{
		// The action is authorized...
		$validator = validator(
			$request->all(),
			[
				"email" => "email|string|",
				"password" => "password|string",
				"phone_number" => "string",
				"first_name" => "string|max:50",
				"last_name" => "string|max:50",
				"country" => "string",
				"full_address" => "string",
				"genre" => "string|max:1",
			]
		);

		if ($validator->fails()) {
			return response([
				"data" => [],
				"messages" => $validator->messages()
			], 402);
		} else {
			$user->update($validator->validate());
			return response([
				"data" => $validator->validate(),
				"message" => 'User updated!',
			]);
		}
	}

	/**
	 * Update the user admin in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function updateIsAdminField(Request $request, User $user)
	{
		if ($user->can('updateIsAdminField', $user)) {
			$validator = validator(
				$request->all(),
				[
					"is_admin" => "boolean|required",
				]
			);

			if (!$validator->fails()) {
				$user->update($validator->validate());
				return response([
					"data" => $validator->validate(),
					"message" => 'Admin user grade updated!'
				]);
			} else {
				return response([
					"data" => [],
					"messages" => $validator->messages()
				], 402);
			}
		} else {
			return response([
				"message" => 'Not right access to do this action!'
			], 403);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(User $user)
	{
		$user->delete();
		return response([
			"message" => 'User deleted!'
		]);
	}
}
