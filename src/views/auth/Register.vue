<template>
  <div class="flex items-center">
    <div class="container mx-auto ">
      <div class="max-w-md mx-auto">
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
              <span class="m-1 text-left text-xs  text-pink-600 font-medium"
                >Lorem ipsum dolor sit,
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
              <span class="m-1 text-left text-xs  text-pink-600 font-medium"
                >Lorem ipsum dolor sit,
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
              <span class="m-1 text-left text-xs  text-pink-600 font-medium"
                >Lorem ipsum dolor sit,
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
              <span class="m-1 text-left text-xs text-pink-600 font-medium"
                >Lorem ipsum dolor sit,
              </span>
            </div>
            <div class="mb-2">
              <button type="button" class="primary-button font-bold">
                REGISTRAR
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
  name: "register",
};
</script>