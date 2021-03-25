<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'description',
		'config'
	];

	/**
	 * Document users ORM many to many relationship.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function users()
	{
		return $this->belongsToMany('App\User', 'user_documents');
	}

	/**
	 * Document users ORM many to many relationship.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function organizations()
	{
		return $this->belongsToMany('App\Organization', 'organization_documents');
	}
}
