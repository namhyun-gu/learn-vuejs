// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueFire from 'vuefire';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(VueFire);
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
