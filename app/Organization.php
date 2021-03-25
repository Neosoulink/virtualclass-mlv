<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'description',
		'owner'
	];

	/**
	 * Organization users many to many ORM relationship.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function users()
	{
		return $this->belongsToMany('App\User', 'organization_users');
	}

	/**
	 * Organization documents many to many ORM relationship.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function documents()
	{
		return $this->belongsToMany('App\Document', 'organization_documents');
	}
}
