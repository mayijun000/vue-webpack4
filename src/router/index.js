import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: (resolve) => require(['../views/index.vue'], resolve),
      },
	  {
	    path: '/car_page',
	    name: 'car_page',
	    component: (resolve) => require(['../views/car_list/car_page.vue'], resolve),
	  }
    ],
    mode: 'history'
})