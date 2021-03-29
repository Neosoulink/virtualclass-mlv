<?php

namespace App\Policies;

use App\Organization;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrganizationPolicy
{
	use HandlesAuthorization;

	/**
	 * Determine whether the user is admin and has full access.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function before(User $user)
	{
		if ($user->is_admin) return Response::allow();
	}

	/**
	 * Determine whether the user can view any models.
	 *
	 * @param  \App\User  $user
	 * @return mixed
	 */
	public function viewAny(User $user)
	{
		Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can view the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return mixed
	 */
	public function view(User $user, Organization $organization)
	{
		return $this->belongsToOrganization($user, $organization)
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
		return Response::allow();
	}

	/**
	 * Determine whether the user can update the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return mixed
	 */
	public function update(User $user, Organization $organization)
	{
		return $organization->owner == $user->id
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can delete the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return mixed
	 */
	public function delete(User $user, Organization $organization)
	{
		return $organization->owner == $user->id
			? Response::allow()
			: Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can restore the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return mixed
	 */
	public function restore(User $user, Organization $organization)
	{
		return Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Determine whether the user can permanently delete the model.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return mixed
	 */
	public function forceDelete(User $user, Organization $organization)
	{
		return Response::deny("You don't have right access to do this action!", 403);
	}

	/**
	 * Internal method that help us to determine if the current user belongs to *	organization.
	 *
	 * @param  \App\User  $user
	 * @param  \App\Organization  $organization
	 * @return boolean
	 */
	private function belongsToOrganization(User $user, Organization $organization)
	{
		$odd = function ($var) use ($organization) {
			return $var->id ==  $organization->id;
		};

		$belongsTo = !!count(array_filter([...$user->documents()->get()], $odd));

		return $belongsTo ? true : false;
	}
}
