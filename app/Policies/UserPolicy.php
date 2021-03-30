<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
	use HandlesAuthorization;

	public function before(User $user, $ability)
	{
		if (!$user->is_admin) return Response::allow();
	}

	/**
	 * Determine whether the user can view any models.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function viewAny(User $user)
	{
		return Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can view the model.
	 *
	 * @param  \App\User  $currentUser
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function view(User $currentUser, User $user)
	{
		return $currentUser->id == $user->id
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can create models.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function create(User $user)
	{
		return Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can update the model.
	 *
	 * @param  \App\User  $currentUser
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function update(User $currentUser, User $user)
	{
		return $currentUser->id == $user->id
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can delete the model.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function delete(User $user)
	{
		return Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can restore the model.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function restore(User $user)
	{
		//
	}

	/**
	 * Determine whether the user can permanently delete the model.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function forceDelete(User $user)
	{
		//
	}

	/**
	 * Determine whether the user is admin.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function isAdmin(User $user)
	{
		return boolval($user->is_admin);
	}
}
