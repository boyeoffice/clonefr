try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

import Vue from 'vue'
window.axios = require('axios')
import App from './App.vue'
import Router from './routes.js'
import Auth from './store/auth.js'
import { store } from './store'
axios.defaults.baseURL = 'http://iclone.dev'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.getToken()
var infiniteScroll =  require('vue-infinite-scroll')
Vue.use(infiniteScroll)


new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store
})
