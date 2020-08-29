<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<title>{{ config('app.name', 'Laravel') }}</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<!-- Fonts -->
	<link rel="dns-prefetch" href="//fonts.gstatic.com">

	<!--  Fonts and icons     -->
	{{--<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">--}}
	{{--<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">--}}
	{{--<link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">--}}

	<!-- Styles -->
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
	<div id="app" style="background-color: red height: 100%;">
		<App />
	</div>
	<!-- Scripts -->
	<script src="{{ (env('APP_ENV') === 'development') ? mix('js/app.js') : asset('js/app.js') }}" defer></script>
	<style>
		i.md-icon,
		i.fa,
		i.material-icons {
			display: none;
		}
	</style>
</body>

</html>
