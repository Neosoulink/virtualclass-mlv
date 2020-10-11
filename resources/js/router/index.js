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
				name: 'dashboard',
				component: resolve => require(['../views/dashboard/Home.vue'], resolve),
			},
			{
				path: 'creation',
				name: 'dashboard-creation',
				component: resolve => require(['../views/dashboard/creation/Index.vue'], resolve),
			},
			{
				path: 'creation/new',
				name: 'dashboard-creation-new',
				component: resolve => require(['../views/dashboard/creation/New.vue'], resolve),
				meta: {
					requireSelectedDoc: true,
				},
				children: [
					{
						path: 'preview',
						name: 'dashboard-creation-new-preview',
						component: resolve => require(['../views/dashboard/creation/Preview.vue'], resolve),
					},
				]
			},

			{
				path: 'demo',
				name: 'dashboard-demo',
				component: resolve => require(['../views/dashboard/demo/Index.vue'], resolve),
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
	linkActiveClass: "nav-item active",
});

export default router;
