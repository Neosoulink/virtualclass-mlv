<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
	protected $guarded = [
		"name",
		"description",
	];

	/**
	 * Return a list of user roles.
	 *
	 * @return array
	 */
	public function roles()
	{
		return $this->belongsToMany('App\User', 'user_roles');
	}
}
