<?php

use Illuminate\Database\Seeder;

class UserDocumentRoleSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('user_document_roles')->insert([
			'name' => 'owner',
			'description' => 'Owner of document'
		]);

		DB::table('user_document_roles')->insert([
			'name' => 'editor',
			'description' => 'editor of document'
		]);

		DB::table('user_document_roles')->insert([
			'name' => 'viewer',
			'description' => 'Viewer of document'
		]);
	}
}
