<template>
  <div class="flex items-center bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <!-- <img class="mx-auto h-32" src="@/assets/icons/code-icon.svg" alt="Code" /> -->
        <div class="text-center flex justify-evenly items-center mb-12">
          <p
            class="text-lg font-semibold text-primary pb-1 border-b-2 border-primary dark:text-gray-200"
          >
            <router-link to="register">Inicia Sesión</router-link>
          </p>
          <span class="w-2 bg-black"></span>
          <p class="text-lg font-semibold text-primary pb-1 dark:text-gray-200">
            <router-link to="register">Regístrate</router-link>
          </p>
        </div>
        <div class="m-7">
          <form action="">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Correo electrónico</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                v-model="email"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <span class="m-1 text-left text-xs text-pink-600 font-medium" v-show="validate.email"
              >Email Requerido.
              </span>
            </div>
            <div class="mb-3">
              <label
                for="password"
                class="text-sm text-gray-600 dark:text-gray-400"
                >Contraseña</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                v-model="password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <span class="m-1 text-left text-xs text-pink-600 font-medium" v-show="validate.password"
              >Password Requerido.
              </span>
            </div>
            <div class="mb-3 flex justify-between items-center">
              <router-link
                to="reset-password"
                class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-primary dark:hover:text-primary"
              >
                ¿Olvidaste tu contraseña?
              </router-link>
              <button
                type="button"
                class="flex items-center text-sm text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                <input type="checkbox" />
                <span class="ml-1">Mantenerme conectado</span>
              </button>
            </div>
            <div class="mb-6">
              <button type="button" class="primary-button font-bold" @click="login">
                INGRESAR
              </button>
            </div>
            <div class="mb-4 text-center">
              También puedes iniciar sesión con tus redes
            </div>
            <div class="flex">
              <button type="button" class="social-button mr-1">
                <img class="h-7" src="@/assets/icons/github.svg" alt="GitHub" />
                <span class="pl-2">GitHub</span>
              </button>
              <button type="button" class="social-button ml-1">
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
export default {
  name: "Login",
  data(){
    return {
      email: '',
      password: '',
      validate:{
        email : false,
        password: false
      }
    }
  },
  methods:{
    login(){
      this.email == '' ? this.validate.email = true : this.validate.email = false;
      this.password == '' ? this.validate.password = true : this.validate.password = false
    }
  }
};
</script>
