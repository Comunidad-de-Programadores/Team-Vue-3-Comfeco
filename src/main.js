import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
// import VueCompositionAPI from '@vue/composition-api'


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueCompositionAPI)