import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Falcon9',
      name: 'Falcon9',
      component: () => import('./views/Falcon9.vue')
    },
    {
      path: '/FalconHeavy',
      name: 'FalconHeavy',
      component: () => import('./views/FalconHeavy.vue')
    },
    {
      path: '/Dragon',
      name: 'Dragon',
      component: () => import('./views/Dragon.vue')
    },
    {
      path: '/Starship',
      name: 'Starship',
      component: () => import('./views/Starship.vue')
    },
    {
      path: '/AboutSpaceX',
      name: 'AboutSpaceX',
      component: () => import('./views/AboutSpaceX.vue')
    },
    {
      path: '/Careers',
      name: 'Careers',
      component: () => import('./views/Careers.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../src/views/api.vue')
    },
    
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
