import Vue from 'vue';
import Vuex from 'vuex';

import { getLocalUser } from './helpers/auth'
Vue.use(Vuex);

const user = getLocalUser();

const state = {
	currentUser: user,
	isLoggedIn: !!user,
	loading: false,
	auth_error: null,
};

const getters = {
	currentUser(state) {
		return state.currentUser;
	},
	isLoggedIn(state) {
		return state.isLoggedIn;
	},
	loading(state) {
		return state.loading;
	},
	authError(state) {
		return state.auth_error;
	},
};

const mutations = {
	LOGIN(state) {
		state.loading = true;
		state.auth_error = null;
	},
	LOGIN_SUCCESS(state, payload) {
		state.auth_error = null;
		state.isLoggedIn = true;
		state.loading = false;
		state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });

		localStorage.setItem("user", JSON.stringify(state.currentUser));
	},
	LOGIN_FAILED(state, payload) {
		state.loading = false;
		state.auth_error = payload.error;
	},
	LOGOUT(state) {
		localStorage.removeItem('user');
		state.isLoggedIn = false;
		state.currentUser = null;
	},
};

const actions = {
	login(context) {
		context.commit('LOGIN');
	},
};

let store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: true
});

export default store;
