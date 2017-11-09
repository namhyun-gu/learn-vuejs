import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import HelloWorld from '@/components/HelloWorld';
import TimesViewer from '@/components/TimesViewer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: HelloWorld,
        },
        {
          path: 'times-viewer',
          name: 'times-viewer',
          component: TimesViewer,
        },
      ],
    },
  ],
});
