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
			$table->name('organization');
			$table->name('sender_user');
			$table->name('email_invited');
			$table->name('accepted_at');
			$table->name('declined_at');
			$table->timestamps('expiration_date');
			$table->timestamps();
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
