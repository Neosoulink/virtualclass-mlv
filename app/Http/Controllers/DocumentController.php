<?php

namespace App\Http\Controllers;

use App\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return response()->json(Document::all());
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
				"description" => "string|required",
				"config" => "json|required",
			]
		);

		if (!$validator->fails()) {
			Document::create($validator->validate());
			return response([
				"data" =>  $validator->validate(),
				"message" => "The document " . $validator->validate()["name"] . " has been created!"
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
	 * @param  \App\Document  $document
	 * @return \Illuminate\Http\Response
	 */
	public function show(Document $document)
	{
		return response()->json($document);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Document  $document
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Document $document)
	{
		$validator = validator(
			$request->all(),
			[
				"name" => "string",
				"description" => "string",
				"config" => "json",
			]
		);

		if (!$validator->fails()) {
			$document->update($validator->validate());
			return response([
				"data" =>  $validator->validate(),
				"message" => "The document " . $validator->validate()["name"] . " has been updated!"
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
	 * @param  \App\Document  $document
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Document $document)
	{
		$doc = $document;
		$document->delete();

		return response([
			"data" =>  $doc,
			"message" => "The document " . $doc->name . " has been deleted!"
		]);
	}
}
