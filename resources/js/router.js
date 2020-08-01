import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: resolve => require(['./views/Home.vue'], resolve),
	},
	{
		path: '/login',
		component: resolve => require(['./views/Login.vue'], resolve),
	},
	{
		path: '/dashboard',
		component: resolve => require(['./components/Dashboard.vue'], resolve),
		meta: {
			requireAuth: true,
		},
		children: [
			{
				path: '/',
				component: resolve => require(['./views/dashboard/Home.vue'], resolve),
			}
		],
	}
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
