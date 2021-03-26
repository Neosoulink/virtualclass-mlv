<?php

use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('roles')->insert([
			'name' => 'admin',
			'description' => 'Full access to system'
		]);

		DB::table('roles')->insert([
			'name' => 'user',
			'description' => 'User lambda'
		]);

		DB::table('roles')->insert([
			'name' => 'viewer',
			'description' => 'Viewer access in system'
		]);
	}
}
