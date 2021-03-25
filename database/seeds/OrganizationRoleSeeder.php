<?php

use Illuminate\Database\Seeder;

class OrganizationRoleSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('organization_roles')->insert([
			'name' => 'owner',
			'description' => 'Owner of organization'
		]);

		DB::table('organization_roles')->insert([
			'name' => 'admin',
			'description' => 'editor of organization'
		]);

		DB::table('organization_roles')->insert([
			'name' => 'member',
			'description' => 'Viewer of organization'
		]);

		DB::table('organization_roles')->insert([
			'name' => 'viewer',
			'description' => 'Viewer of organization'
		]);
	}
}
