import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'
import App from './App.vue'

import './registerServiceWorker'

Vue.config.productionTip = false

// Custom Directive
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Axios.defaults.baseURL = 'https://pokeapi.co/api/v2/' // https://pokeapi.co/

Vue.use(VueAxios, Axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
