import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'
import App from './App.vue'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.directive('highlight', {
    bind(el, binding, vnode) {
      el.style.backgroundColor = 'red';
  }
});
// Custom directive called v-focus
Vue.directive('focus', {
  // When element is bound to the DOM
  inserted: function (el) {
    // Focus the element
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
