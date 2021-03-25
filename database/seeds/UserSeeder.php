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
			'email' => 'neodarksoulink@gmail.com',
			'password' => Hash::make('12345678'),
			'phone_number' => '+2430335958',
			'country' => 'DRC',
			'first_name' => 'Nathan',
			'last_name' => 'Mandemvo',
			'full_address' => 'P - RDC C -  	Kinshasa',
			'genre' => 'M',
		]);
	}
}
