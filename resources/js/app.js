require('./bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import { initialize } from './helpers/general';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial)

import RenderView from './components/RouterView.vue';

initialize(store, router);

new Vue({
	el: '#app',
	store,
	router,
	components: {
		RenderView
	},
});
