import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
// import { firebase } from "@/firebase/config";  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { default: true }
  },
  {
    path: '/private',
    name: 'Private',
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
        path: 'sign',
        name: 'Sign',
        component: () => import(/* webpackChunkName: "sign" */ '../views/auth/Sign'),
      },
      {
        path: 'reset-password',
        name: 'Reset Pasword',
        component: () => import(/* webpackChunkName: "reset-password" */ '../views/auth/ResetPassword'),
      },
      {
        path: '/Terminos-y-Condiciones',
        name: 'Condiciones',
        component: () => import(/* webpackChunkName: "condiciones" */ '../components/Condiciones y Politicas'),
      }
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

// router.beforeEach((to, from, next) => {

//   let isAuth = false;
//   firebase.auth().onAuthStateChanged(async (user) => {

//     if (user?.uid) {
//       isAuth = true;
//       const { uid, displayName, email, photoURL } = user;
//       localStorage.setItem("currentUser", JSON.stringify({ uid, displayName, email, photoURL }));
//     }

//     // La ruta requiere autentificación
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       if (isAuth) next();
//       else next({ name: 'Login' });
//     } else {
//       // Evitamos que un usuario logeado ingrese a alguna vista con el path auth
//       if (isAuth && to.path.includes('auth')) {
//         // En caso de ser así enviamos al usuario al Home
//         next({ name: 'Home' });
//       }
//       else next();
//     }

//   });
// })

export default router
