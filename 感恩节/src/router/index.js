import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
