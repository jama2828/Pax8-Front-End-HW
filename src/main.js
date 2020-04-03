import Vue from 'vue';
import VueSimpleAlert from 'vue-simple-alert';

import App from './App.vue';
import router from './router';

Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
