<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CustomFileSystem extends Controller
{
	public static function createDirectory(array $data)
	{
		Validator::make($data, [
			'disk' => 'require|string',
			'path' => 'require|string',
			'name' => 'require|string',
		]);

		return Storage::disk($data['disk'])->makeDirectory($data['path'] . $data['name']);
	}
}
