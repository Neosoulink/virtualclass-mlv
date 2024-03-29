require('./global/bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import { initialize } from './helpers/guard';

// Plugins
import GlobalComponents from "./global/globalComponents";
import GlobalDirectives from "./global/globalDirectives";
import Notifications from "./components/NotificationPlugin";
//import CKEditor from '@ckeditor/ckeditor5-vue';
import CKEditor from 'ckeditor4-vue';
//import Chartist from "chartist";
import VueFileAgent from 'vue-file-agent';
import MaterialDashboard from "./global/material-dashboard";

// Styles
 import 'vue-file-agent/dist/vue-file-agent.css';

//Vue.prototype.$Chartist = Chartist;

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(CKEditor);
Vue.use(VueFileAgent);

initialize(store, router);

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
});
