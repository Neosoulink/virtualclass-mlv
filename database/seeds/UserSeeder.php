<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users')->insert([
			'name' => "Solaris",
			'email' => 'neodarksoulink@gmail.com',
			'password' => Hash::make('12345678'),
		]);
	}
}
