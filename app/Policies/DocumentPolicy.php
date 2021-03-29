<?php

namespace App\Policies;

use App\User;
use App\Document;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class DocumentPolicy
{
	use HandlesAuthorization;

	/**
	 * Determine whether the user is admin and has full access.
	 *
	 * @param  \App\User  $user
	 * @param mixed $ability
	 * @return mixed
	 */
	public function before(User $user, $ability)
	{
		if ($user->is_admin) return Response::allow();
	}

	/**
	 * Determine whether the user can view any models.
	 *
	 * @param  \App\User  $user
	 * @return boolean
	 */
	public function viewAny(User $user)
	{
		return true;
	}

	/**
	 * Determine whether the user can view the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return Illuminate\Auth\Access\Response
	 */
	public function view(User $user, Document $document)
	{
		return $this->isOwner($user, $document)
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can create models.
	 *
	 * @param  \App\User  $user
	 * @return boolean
	 */
	public function create(User $user)
	{
		return true;
	}

	/**
	 * Determine whether the user can update the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return Illuminate\Auth\Access\Response
	 */
	public function update(User $user, Document $document)
	{
		return $this->isOwner($user, $document)
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can delete the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return Illuminate\Auth\Access\Response
	 */
	public function delete(User $user, Document $document)
	{
		return $this->isOwner($user, $document)
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can restore the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return mixed
	 */
	public function restore(User $user, Document $document)
	{
		//
	}

	/**
	 * Determine whether the user can permanently delete the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return boolean
	 */
	public function forceDelete(User $user, Document $document)
	{
		return false;
	}

	/**
	 * Internal method that help us to determine is the current user is document owner.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Document  $document
	 * @return boolean
	 */
	private function isOwner(User $user, ?Document $document)
	{
		$odd = function ($var) use ($document) {
			return $var->id == $document->id;
		};

		$is_owner = !!count(array_filter([...$user->documents()->get()], $odd));

		return $is_owner ? true : false;
	}
}
