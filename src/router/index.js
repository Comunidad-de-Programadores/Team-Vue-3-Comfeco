import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Private from '../views/Private'
import Login from '../views/Login'
import Sign from '../views/Sign'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Private',
    component: Private
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },  {
    path: '/Sign',
    name: 'Sign',
    component: Sign 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
