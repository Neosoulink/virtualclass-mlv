require('./global/bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import { initialize } from './helpers/general';

// Plugins
import GlobalComponents from "./global/globalComponents";
import GlobalDirectives from "./global/globalDirectives";
import Notifications from "./components/NotificationPlugin";
import CKEditor from '@ckeditor/ckeditor5-vue';
import Chartist from "chartist";

// MaterialDashboard plugin
import MaterialDashboard from "./global/material-dashboard";


Vue.prototype.$Chartist = Chartist;

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(CKEditor);

initialize(store, router);

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
});
