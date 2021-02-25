import Vue from 'vue'
import vuelidate from "vuelidate";

Vue.use(vuelidate);

import App from './App.vue'
import router from './router'
// import '@/assets/css/index.css'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
