const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.browserSync('virtualclass-mlv.dev');
//mix.options({
//	hmrOptions: {
//		host: 'virtualclass-mlv.dev',  // site's host name
//		port: 8080,
//	}
//});

//// // fix css files 404 issue
//mix.webpackConfig({
//	// add any webpack dev server config here
//	devServer: {
//		proxy: {
//			host: '127.0.0.1',  // host machine ip
//			port: 8080,
//		},
//		watchOptions: {
//			aggregateTimeout: 200,
//			poll: 5000
//		},

//	}
//});
