import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: resolve => require(['../views/Home.vue'], resolve),
	},
	{
		path: '/login',
		name: 'login',
		component: resolve => require(['../views/Login.vue'], resolve),
	},
	{
		path: '/signup',
		name: 'signup',
		component: resolve => require(['../views/Signup.vue'], resolve),
	},
	{
		path: '/dashboard',
		component: resolve => require(['../views/dashboard/Layout/DashboardLayout.vue'], resolve),
		meta: {
			requireAuth: true,
		},
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: resolve => require(['../views/dashboard/Home.vue'], resolve),
			},
			{
				path: 'creation',
				name: 'Dashboard-Creation',
				component: resolve => require(['../views/dashboard/Creation.vue'], resolve),

			},
			{
				path: 'creation/new',
				name: 'Dashboard-Creation-New',
				component: resolve => require(['../views/dashboard/creation/New.vue'], resolve),
			},
			{
				path: 'demo',
				name: 'Dashboard-Demo',
				component: resolve => require(['../views/dashboard/demo/Demo.vue'], resolve),
			}
		],
	},
	{
		path: '*',
		component: resolve => require(['../views/404.vue'], resolve),
	}
];

const router = new VueRouter({
	routes,
	mode: 'history',
	linkExactActiveClass: "nav-item active",
});

export default router;
