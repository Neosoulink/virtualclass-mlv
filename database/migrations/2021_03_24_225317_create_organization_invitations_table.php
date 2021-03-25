<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationInvitationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('organization_invitations', function (Blueprint $table) {
			$table->id();
			$table->foreignId('organization_id')->constrained('organizations');
			$table->foreignId('users_id')->constrained('users');
			$table->string('email_invited');
			$table->timestamp('accepted_at');
			$table->timestamp('declined_at');
			$table->timestamp('expiration_date');
			$table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('organization_invitations');
	}
}
