<?php

namespace App\Http\Controllers;

use App\User;
use App\Document;
use App\Organization;
use Illuminate\Http\Request;
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
		$validator = validator(
			request()->all(),
			[
				"forDocument" => "int",
				"forOrganization" => "int",
			]
		);

		if (!$validator->fails()) {
			if ($forDocument = intval($validator->validate()["forDocument"])) {
				$document = Document::find($forDocument);

				return response(
					$document != null
						? $document->organizations()->get()
						: []
				);
			} else if ($forOrganization = intval($validator->validate()["forOrganization"])) {
				$organization = Organization::find($forOrganization);

				return response(
					$organization != null
						? $organization->organizations()->get()
						: []
				);
			} else {
				return response(Organization::all());
			}
		} else {
			return response()->json([
				"data" =>  [],
				"messages" => $validator->messages()
			], 402);
		}

		return response()->json(User::all());
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


		$adminValidator = validator(
			$request->all('is_admin'),
			[
				"is_admin" => "boolean",
			]
		);

		if (!$validator->fails()) {
			$canBeAdmin = !$adminValidator->fails() && !!count($adminValidator->validate()) && Gate::inspect('canAddAdmin')->allowed();

			$data = [
				...$validator->validate(),
				...($canBeAdmin) ? $adminValidator : [],
			];
			return response([
				"data" => User::create($data),
				"message" => "User created!",
				"messages" => [
					...$adminValidator->messages(),
					...(!$canBeAdmin) ? ["this user can't be admin!"] : [],
				]
			]);
		} else {
			return response([
				"data" => [],
				"messages" => [...$validator->messages()]
			], 402);
		}
	}

	/**
	 * Display user.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function show(User $user, ?Request $request)
	{
		if ($request->input('withDocuments', false)) {
			return response($user->with('documents')->get());
		} else if ($request->input('withOrganizations', false)) {
			return response($user->with('organizations')->get());
		} else if ($request->input('onlyDocuments', false)) {
			return $user->documents()->get();
		} else if ($request->input('onlyOrganizations', false)) {
			return $user->organizations()->get();
		}
		return $user;
	}

	/**
	 * Update user in storage.
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
				"email" => "email|string",
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
	 * Update user admin in storage.
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
	 * Remove user from storage.
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
