import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import { firebase } from "@/firebase/config";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { default: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "private" */ '../views/Private.vue'),
    meta: {
      requiresAuth: true
    },
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
        component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
      },
      {
        path: 'reset-password',
        name: 'Reset Pasword',
        component: () => import(/* webpackChunkName: "reset-password" */ '../views/auth/ResetPassword'),
      },
      {
        path: '/Terminos-y-Condiciones',
        name: 'Condiciones',
        component: () => import(/* webpackChunkName: "condiciones" */ '../components/CondicionesyPoliticas'),
      }
      
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "condiciones" */ '../views/Profile'),
    children:[
      {
        path: 'perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "login" */ '../views/profile/Perfil.vue'),
      },
      {
        path: 'insignia',
        name: 'Insignia',
        component: () => import(/* webpackChunkName: "login" */ '../views/profile/Perfil.vue'),
      },
      {
        path: 'grupos',
        name: 'Grupos',
        component: () => import(/* webpackChunkName: "login" */ '../views/profile/Perfil.vue'),
      },
      {
        path: 'eventos',
        name: 'Eventos',
        component: () => import(/* webpackChunkName: "login" */ '../views/profile/Perfil.vue'),
      },
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let isAuth = false;
  firebase.auth().onAuthStateChanged(async (user) => {

    if (user?.uid) {
      isAuth = true;
      const { uid, displayName, email, photoURL } = user;
      localStorage.setItem("currentUser", JSON.stringify({ uid, displayName, email, photoURL }));
    }

    // La ruta requiere autentificación
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (isAuth) next();
      else next({ name: 'Login' });
    } else {
      // Evitamos que un usuario logeado ingrese a alguna vista con el path auth
      if (isAuth && to.path.includes('auth')) {
        // En caso de ser así enviamos al usuario al Home
        next({ name: 'Home' });
      }
      else next();
    }

  });
})

export default router
