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
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                v-model="$v.username.$model"
              />
              <div v-if="$v.username.$error">
                <span class="form__error" v-if="!$v.username.required">
                  Username es requerido.
                </span>
                <span class="form__error" v-if="!$v.username.minLength">
                  El Username debe tener a lo menos
                  {{ $v.username.$params.minLength.min }} caraceteres.
                </span>
              </div>
            </div>
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
                v-model="$v.email.$model"
              />
              <div v-if="$v.email.$error">
                <span class="form__error" v-if="!$v.email.required">
                  Email Requerido.
                </span>
                <span class="form__error" v-if="!$v.email.email">
                  Ingrese un correo electrónico válido.
                </span>
              </div>
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
                v-model="$v.password.$model"
              />
              <div v-if="$v.password.$error">
                <span class="form__error" v-if="!$v.password.required">
                  La contraseña es requerida.
                </span>
                <span class="form__error" v-if="!$v.password.minLength">
                  La contraseña debe tener a lo menos
                  {{ $v.password.$params.minLength.min }} caraceteres.
                </span>
              </div>
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
                v-model="$v.confirmarPassword.$model"
              />
              <div v-if="$v.confirmarPassword.$error">
                <span
                  class="form__error"
                  v-if="!$v.confirmarPassword.sameAsPassword"
                >
                  Las contraseñas no son identicas.
                </span>
              </div>
            </div>
            <div class="mb-4">
              <button
                type="button"
                class="primary-button font-bold"
                :disabled="$v.$invalid"
                @click="startRegisterWithEmailPasswordName()"
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { firebase, googleAuthProvider } from "@/firebase/config";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmarPassword: "",
    };
  },
  validations: {
    username: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmarPassword: { sameAsPassword: sameAs("password") },
  },
  methods: {
    startGoogleLogin() {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
          console.log(user);
          // commit("login", user);
        });
    },
    startRegisterWithEmailPasswordName() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async ({ user }) => {
          await user.updateProfile({ displayName: this.username });
          console.log(user);
          // commit("login", user);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
