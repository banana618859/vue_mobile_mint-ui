/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-20 20:51:20
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import B from '../components/B.vue';
import C from '../components/C.vue';
import D from '../components/D.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'a',
    children:[
      {
        path: 'a',
        name: 'a',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: 'b',
        name: 'b',
        component: B,
      },
      {
        path: 'c',
        name: 'c',
        component: C,
      },
      {
        path: 'd',
        name: 'd',
        component: D,
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
