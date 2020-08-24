<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DashboardDemoController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api');
	}

	public function getLogoThemesPath()
	{
		$files = Storage::disk('demo')->files('logo-themes');
		$url = [];
		foreach ($files as $value) {
			$url[] = Storage::disk('demo')->url($value);
		}
		return $url;
	}
}
