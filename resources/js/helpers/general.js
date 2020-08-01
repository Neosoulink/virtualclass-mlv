export function initialize(store, router) {

	router.beforeEach((to, from, next) => {
		const requireAuth = to.matched.some(record => record.meta.requireAuth);
		const currentUser = store.state.currentUser;

		if (requireAuth && !currentUser) {
			next('/login');
		} else if (to.path == '/login' && currentUser) {
			next('/dashboard');
		} else {
			next();
		}
	});

	axios.interceptors.request.use(config => {
		return config;
	}, error => {
		// Do something with request error
		return Promise.reject(error);
	});

	axios.interceptors.response.use(response => {
		return response;
	}, error => {
		console.log('efefdd20');
			if (error.response.status == 401 && router.history.current.path !== "/login") {
			store.commit('LOGOUT');
			router.push('/login');
		}
		return Promise.reject(error);
	});

	if (store.getters.currentUser) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters.currentUser.token}`;
	}

}
