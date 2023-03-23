import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return {path: '/home'};
    }
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ '@/pages/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () =>
      import(/* webpackChunkName: "About" */ '@/pages/TestMock.vue')
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return {path: '/404'};
    }
  }
];
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    };
  }
});
export default router;
