import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Browse from './views/Browse.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home }, // Route 1
    { path: '/search', component: Search }, // Route 2
    { path: '/browse', component: Browse } // Route 3
  ]
})
