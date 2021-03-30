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
				"email" => "email|unique:users|string|required",
				"password" => "password|confirmed|required",
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
			$canBeAdmin = !$adminValidator->fails() && !!count($adminValidator->validate()) && Gate::allows('isAdmin');

			$data = $validator->validate();

			if ($canBeAdmin) $data["is_admin"] = $adminValidator->validate()["is_admin"];

			return response([
				"data" => User::create($data),
				"message" => "User created!",
				"messages" => [
					...[$validator->messages()],
					...[$adminValidator->messages()],
					...(!$canBeAdmin && boolval($request->input("is_admin", false))) ? ["this user can't be admin!"] : [],
				]
			]);
		} else {
			return response([
				"data" => [],
				"messages" => [...[$validator->messages()]]
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

		$adminValidator = validator(
			$request->all(),
			[
				"is_admin" => "boolean",
			]
		);

		if (!$validator->fails()) {
			$canUpdateAdmin = !$adminValidator->fails() && !!count($adminValidator->validate()) && Gate::allows('is_admin');

			$data = [
				...$validator->validate(),
				...($canUpdateAdmin) ? $adminValidator : [],
			];

			$user->update($data);
			return response([
				"data" => $data,
				"message" => "User updated!",
				"messages" => [
					...$adminValidator->messages(),
					...(!$canUpdateAdmin && boolval($request->input("is_admin", false))) ? ["The current user can't update administration field!"] : [],
				]
			], 402);
		} else {
			return response([
				"data" => [],
				"messages" => [...$validator->messages()]
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
		$user->delete();
		return response([
			"message" => 'User deleted!'
		]);
	}
}
