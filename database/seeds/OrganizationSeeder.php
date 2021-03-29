<?php

use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('organization')->insert([
			'name' => 'Org test',
			'description' => 'Organization test',
			"owner" => 1
		]);
	}
}
