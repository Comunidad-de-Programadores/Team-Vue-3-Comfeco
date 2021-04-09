<template>
  <div id="Login">
    <div id="header">
      <div id="header-container">
        <Header/>
      </div>
      <div id="login-mobile-decoration" class=" w-full lg:hidden">
        <img src="../../assets/images/login-decoration.png" alt="Purple Water UI">
      </div>
    </div>
    <div id="Login-form" class="flex items-center bg-white dark:bg-gray-900 z-0">
    <div class="container mx-auto lg:my-16">
      <div class="max-w-md mx-auto lg:my-16">
        <!-- <img class="mx-auto h-32" src="@/assets/icons/code-icon.svg" alt="Code" /> -->
        <div class="text-center flex justify-evenly items-center mb-12">
          <p
            class="text-lg font-semibold text-primary pb-1 border-b-2 border-primary dark:text-gray-200"
          >
            Inicia Sesión
          </p>
          <span class="w-2 bg-black"></span>
          <p class="text-lg font-semibold text-primary pb-1 dark:text-gray-200">
            <router-link to="register">Regístrate</router-link>
          </p>
        </div>
        <div class="m-7">
          <form @submit.prevent="startLoginEmailPassword">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Correo electrónico
              </label>
              <input
                v-model="$v.email.$model"
                id="email"
                name="email"
                type="email"
                placeholder="example@comfeco.com"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
            <div class="mb-3">
              <label
                for="password"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Contraseña
              </label>
              <div class="form-control">
                <input
                  v-model="$v.password.$model"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control__input form-control__input--append"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                />
                <!-- <img
                  class="form-control__icon form-control__icon--append"
                  :src="passwordIcon"
                  @click="showPassword = !showPassword"
                /> -->
              </div>
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
                <input v-model="keepConnected" type="checkbox" />
                <button
                  class="ml-1"
                  type="button"
                  @click="keepConnected = !keepConnected"
                >
                  Mantenerme conectado
                </button>
              </button>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="primary-button font-bold"
                :disabled="$v.$invalid"
                @click="startLoginEmailPassword()"
              >
                INGRESAR
              </button>
            </div>
            <div class="mb-4 text-center">
              También puedes iniciar sesión con tus redes
            </div>
            <div class="flex">
              <button type="button" class="social-button mr-1">
                <img class="h-7" src="../../assets/icons/fb.svg" alt="Facebook" />
                <span class="pl-2">Facebook</span>
              </button>
              <button
                type="button"
                class="social-button ml-1"
                @click="startGoogleLogin()"
              >
                <img class="h-6" src="../../assets/icons/google.svg" alt="Google" />
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
import { required, email, minLength } from "vuelidate/lib/validators";
import { firebase, googleAuthProvider } from "@/firebase/config";
import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import Footer from '../../components/Footer'
export default {
  name: "Login",
  data() {
    return {
      keepConnected: false,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  computed: {
    passwordIcon() {
      if (this.showPassword) return eyeOff;
      return eye;
    },
  },
  methods: {
    startLoginEmailPassword() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(({ user }) => {
          console.log(user);
          this.$router.push("/private");
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
    startGoogleLogin() {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
          console.log(user);
          this.$router.push("/private");
        });
    },
  },
  components: {
    Header,
    Footer
  }
};
</script>
