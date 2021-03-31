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
				"withDocuments" => "boolean",
				"withOrganizations" => "boolean",
			]
		);


		if (!$validator->fails()) {
			$users = User::all();

			if ($forDocument = request()->input("forDocument", false)) {
				$document = Document::find($forDocument);

				$users = $document != null
					? $document->users()->get()
					: [];
			} else if ($forOrganization = request()->input("forOrganization", false)) {
				$organization = Organization::find($forOrganization);

				$users = $organization != null
					? $organization->users()->get()
					: [];
			}

			return $users;

			return response($users);
		} else {
			return response()->json([
				"data" =>  [],
				"messages" => $validator->messages()
			], 402);
		}
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validationRules = [
			"email" => "email|unique:users|string|required",
			"password" => "password|confirmed|required",
			"phone_number" => [
				"string",
				"regex:/^(\+| )?\(?[0-9]{1,4}\)?[0-9]{4,12}$/",
				"required"
			],
			"first_name" => "string|max:50|required",
			"last_name" => "string|max:50",
			"country" => "string",
			"full_address" => "string",
			"genre" => "string|max:1",
			"is_admin" => "boolean"
		];

		$validator = validator(
			$request->all(),
			$validationRules
		);

		if (!$validator->fails()) {
			$data = $validator->validate();

			return response([
				"data" => User::create($data),
				"message" => "User created!",
				"messages" => $validator->messages()
			]);
		} else {
			return response([
				"data" => [],
				"messages" => $validator->messages()
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
		$validator = validator(
			request()->all(),
			[
				"withDocuments" => "boolean",
				"withOrganizations" => "boolean",
			]
		);

		if (!$validator->fails()) {
			$user_ = $user;
			$params = $validator->validate();

			if ($request->input('withDocuments', false))  $user_ = $user_->with('documents');
			if ($request->input('withOrganizations', false)) $user_ = $user_->with('organizations');

			return response()->json(!!count($params) ? $user_->find($user->id) : $user);
		} else {
			return response()->json([
				"data" =>  [],
				"messages" => $validator->messages()
			], 402);
		}
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
		$validationRules = [
			"email" => "email|string",
			"password" => "password|string",
			"phone_number" => [
				"string",
				"regex:/^(\+| )?\(?[0-9]{1,4}\)?[0-9]{4,12}$/"
			],
			"first_name" => "string|max:50",
			"last_name" => "string|max:50",
			"country" => "string",
			"full_address" => "string",
			"genre" => "string|max:1",
		];

		$canUpdateAdmin = false;
		if ($request->input("is_admin") !== null && Gate::allows('isAdmin')) {
			$validationRules["is_admin"] =  "boolean";
			$canUpdateAdmin = true;
		};

		$validator = validator(
			$request->all(),
			$validationRules
		);

		if (!$validator->fails()) {
			$data = $validator->validate();

			$user->update($data);
			return response([
				"data" => $data,
				"message" => "User updated!",
				"messages" => [
					...(!$canUpdateAdmin) ? ["The current user can't update administration field!"] : [],
				]
			], 402);
		} else {
			return response([
				"data" => [],
				"messages" => $validator->messages()
			]);
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
		$user_ = $user;
		$user->delete();

		return response([
			"data" =>  $user_,
			"message" => "The user " . $user_->first_name . " has been deleted!"
		]);
	}
}
