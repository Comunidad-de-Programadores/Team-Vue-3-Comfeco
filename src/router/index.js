import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Private from '../views/Private'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {default: true}
  },
  {
    path: '/home',
    name: 'Private',
    component: Private
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '../layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Register.vue')
      },
      {
        path: 'sign',
        name: 'Sign',
        component: () => import(/* webpackChunkName: "sign" */ '../views/auth/Sign'),
      },
      {
        path: 'reset-password',
        name: 'Reset Pasword',
        component: () => import(/* webpackChunkName: "reset-password" */ '../views/auth/ResetPassword'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
