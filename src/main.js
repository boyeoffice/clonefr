try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

import Vue from 'vue'
window.axios = require('axios')
import App from './App.vue'
import Router from './routes.js'
import Auth from './store/auth.js'
import { store } from './store'
axios.defaults.baseURL = 'http://api.iclone.ga'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.getToken()
var infiniteScroll =  require('vue-infinite-scroll')
Vue.use(infiniteScroll)

Vue.component('modal', {
	template: ` <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
             <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store
})
