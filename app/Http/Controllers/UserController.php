<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api');
	}

	public function index()
	{
		return 'Hello';
	}

	public function store()
	{
		return 'Hello';
	}

	public function show()
	{
		return 'Hello';
	}

	public function update()
	{
		return 'Hello';
	}

	public function delete()
	{
		return 'Hello';
	}
}
