<template>
 <div id="Register">
    <div id="header">
      <div id="header-container">
        <Header/>
      </div>
      <div id="login-mobile-decoration" class=" w-full lg:hidden">
        <img src="../../assets/images/login-decoration.png" alt="Purple Water UI">
      </div>
    </div>
    <div id="Regidter-form" class="flex items-center">
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
                >Confirm password
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
  <div id="footer" class="">
    <div class="hidden lg:inline-block">
      <Footer/>
    </div>
    <div class="bg-gray-200 lg:hidden">
      <p class="inline-block h-full w-6/12 text-center text-lg subpixel-antialiased font-normal">COMFECO &copy; 2020</p>
      <ul class="inline-block w-6/12">
        <li class="w-full pl-10 pt-1">
          <a href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../../assets/icons/footer-mobile-icons/youtube.svg" alt="Youtube Logo" class="bg-gray-200">
          </a>
          <a href="https://www.instagram.com/comfeco/" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../../assets/icons/footer-mobile-icons/instagram.svg" alt="Instagram Logo" class="bg-gray-200">
          </a>
          <a href="https://www.facebook.com/groups/2637132626546045" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../../assets/icons/footer-mobile-icons/facebook.svg" alt="Facebook Logo" class="bg-gray-200">
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { firebase, googleAuthProvider } from "@/firebase/config";
import Footer from '../../components/Footer'
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
  components:{
    Header,
    Footer
  }
};
</script>
