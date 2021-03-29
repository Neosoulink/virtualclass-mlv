<?php

namespace App\Http\Controllers;

use App\Organization;
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
		return response()->json(Organization::all());
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
			], 402);
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
			], 402);
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
