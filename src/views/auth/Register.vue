<template>
  <div class="flex items-center">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-center flex justify-evenly items-center mt-2 mb-4">
          <p class="text-lg font-semibold text-primary pb-1 dark:text-gray-200">
            <router-link to="login">Inicia Sesión</router-link>
          </p>
          <span class="w-2 bg-black"></span>
          <p
            class="text-lg font-semibold text-primary pb-1 border-b-2 border-primary dark:text-gray-200"
          >
            Regístrate
          </p>
        </div>
        <div class="m-7">
          <form action="">
            <div class="mb-4">
              <label
                for="username"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                v-model="username"
              />
              <span
                class="m-1 text-left text-xs text-pink-600 font-medium"
                v-show="validate.username"
              >
                Username requerido
              </span>
            </div>
            <div class="mb-4">
              <label
                for="username"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                v-model="email"
              />
              <span
                class="m-1 text-left text-xs text-pink-600 font-medium"
                v-show="validate.email"
                >Email Requerido
              </span>
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                v-model="password"
              />
              <span
                class="m-1 text-left text-xs text-pink-600 font-medium"
                v-show="validate.password"
                >Password Requerido
              </span>
            </div>
            <div class="mb-4">
              <label
                for="confirmacion-password"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Confirmar password
              </label>
              <input
                type="password"
                name="confirmacion-password"
                placeholder="confirmar password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                v-model="confirmarPassword"
              />
              <span
                class="m-1 text-left text-xs text-pink-600 font-medium"
                v-show="validate.confirm"
                >Password no es identico
              </span>
            </div>
            <div class="mb-4">
              <button
                type="button"
                class="primary-button font-bold"
                @click="register"
              >
                REGISTRAR
              </button>
            </div>
            <div class="mb-4 text-center">
              También puedes iniciar sesión con tus redes
            </div>
            <div class="flex">
              <button type="button" class="social-button mr-1">
                <img class="h-7" src="@/assets/icons/fb.svg" alt="Facebook" />
                <span class="pl-2">Facebook</span>
              </button>
              <button
                type="button"
                class="social-button ml-1"
                @click="startGoogleLogin()"
              >
                <img class="h-6" src="@/assets/icons/google.svg" alt="Google" />
                <span class="pl-2">Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase, googleAuthProvider } from "@/firebase/config";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmarPassword: "",
      validate: {
        username: false,
        email: false,
        password: false,
        confirm: false,
      },
    };
  },
  methods: {
    register() {
      this.username == ""
        ? (this.validate.username = true)
        : (this.validate.username = false);
      this.email == ""
        ? (this.validate.email = true)
        : (this.validate.email = false);
      this.password == ""
        ? (this.validate.password = true)
        : (this.validate.password = false);
      this.password != this.confirmarPassword
        ? (this.validate.confirm = true)
        : (this.validate.confirm = false);
    },
  },
  startGoogleLogin() {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        // commit("login", user);
      });
  },
};
</script>
