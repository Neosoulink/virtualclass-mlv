import { isEmpty } from "../helpers/Functions";

export function initialize(store, router) {
	router.beforeEach((to, from, next) => {
		const requireAuth = to.matched.some(record => record.meta.requireAuth);
		const requireSelectedDoc = to.matched.some(record => record.meta.requireSelectedDoc);
		const currentUser = store.state.user.currentUser;

		if (requireAuth && !currentUser)
			return next('/login');

		if (to.path == '/login' && currentUser)
			return next('/dashboard');

		if (requireSelectedDoc) {
			const selectedDoc = store.getters['document/getSelectedDoc'];

			if (isEmpty(selectedDoc))
				return next({ name: 'dashboard-creation' });
		}

		next();
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
		if (error.response.status == 401 && router.history.current.path !== "/login") {
			store.commit('user/LOGOUT');
			router.push('/login');
		}
		return Promise.reject(error);
	});

	if (store.getters['user/currentUser']) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters['user/currentUser'].token}`;
	}

}
