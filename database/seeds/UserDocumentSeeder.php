<?php

use Illuminate\Database\Seeder;

class UserDocumentSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('user_documents')->insert([
			'user_id' => 1,
			'document_id' => 1
		]);
	}
}
