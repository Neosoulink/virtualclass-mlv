<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->call([
			// Principals
			UserSeeder::class,
			DocumentSeeder::class,
			OrganizationSeeder::class,

			// Pivots
			UserDocumentRoleSeeder::class,
			OrganizationRoleSeeder::class,
			UserOrganizationSeeder::class,
		]);
	}
}
