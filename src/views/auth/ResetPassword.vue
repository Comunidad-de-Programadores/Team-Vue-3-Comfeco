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
                  for="email"
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
              <span class="m-1 text-left text-xs text-pink-600 font-medium" v-show="validate.email"
              >Email Requerido
              </span>
            </div>
            <div class="mb-2">
              <button type="button" class="primary-button font-bold" @click="reset">RECUPERAR CONTRASEÑA</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reset",
  data(){
    return {
      email: '',
      validate:{
        email : false
      }
    }
  },
  methods:{
    reset(){
      this.email == '' ? this.validate.email = true : this.validate.email = false;
    }
  }
};
</script>