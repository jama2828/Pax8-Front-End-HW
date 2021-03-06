import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Edit from './views/Edit.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: true,
    },
  ],
});
