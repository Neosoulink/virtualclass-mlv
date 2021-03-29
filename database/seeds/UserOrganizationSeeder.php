<?php

use Illuminate\Database\Seeder;

class UserOrganizationSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('user_organizations')->insert([
			'user_id' => 1,
			'organization_id' => 1
		]);
	}
}
