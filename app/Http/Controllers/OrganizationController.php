<?php

namespace App\Http\Controllers;

use App\Organization;
use App\User;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{

	public function __construct()
	{
		$this->authorizeResource(Organization::class, 'organization');
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
				"forUser" => "int",
			]
		);

		if (!$validator->fails()) {
			if ($forUser = intval($validator->validate()["forUser"])) {
				$user = User::find($forUser);
				return response($user != null ? $user->organizations()->get() : []);
			} else {
				return response(Organization::all());
			}
		} else {
			return response()->json([
				"data" =>  [],
				"messages" => $validator->messages()
			], 400);
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
		$validator = validator(
			$request->all(),
			[
				"name" => "string|required",
				"description" => "string",
				"owner" => "required",
			]
		);

		if (!$validator->fails()) {
			Organization::create($validator->validate());
			return response([
				"data" =>  $validator->validate(),
				"message" => "The organization " . $validator->validate()["name"] . " has been created!"
			]);
		} else {
			return response([
				"data" =>  $validator->validate(),
				"messages" => $validator->messages()
			], 400);
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Organization  $organization
	 * @return \Illuminate\Http\Response
	 */
	public function show(Organization $organization)
	{
		return response()->json($organization);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Organization  $organization
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Organization $organization)
	{
		$validator = validator(
			$request->all(),
			[
				"name" => "string",
				"description" => "string",
				"owner" => "",
			]
		);

		if (!$validator->fails()) {
			$organization->update($validator->validate());
			return response([
				"data" =>  $validator->validate(),
				"message" => "The organization " . $validator->validate()["name"] . " has been updated!"
			]);
		} else {
			return response([
				"data" =>  $validator->validate(),
				"messages" => $validator->messages()
			], 400);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Organization  $organization
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Organization $organization)
	{
		$org = $organization;
		$organization->delete();

		return response([
			"data" =>  $org,
			"message" => "The organization " . $org->name . " has been deleted!"
		]);
	}
}
