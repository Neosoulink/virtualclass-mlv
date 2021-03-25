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
	 * Return a list document users.
	 *
	 * @return array
	 */
	public function documents()
	{
		return $this->belongsToMany('App\User', 'user_documents');
	}
}
