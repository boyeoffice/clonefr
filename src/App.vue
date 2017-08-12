<template>
  <div id="app">
  <navbar></navbar>
   <router-view ></router-view>
  </div>
</template>

<script>
import Navbar from './views/inc/Navbar.vue'
import axios from 'axios'
import Auth from './store/auth.js'
import { get } from './helper/api.js'
export default {
  components: { Navbar },
  name: 'app',
  data(){
      return {
       
      }
  },
  mounted(){
     this.getUser()
   },
  methods: {
    getUser(){
      axios.get('http://iclone.dev/api/user').then(res => {
        this.$store.commit('auth_user_data', res.data)
      })
    }
  }
 }
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar {
  margin-bottom: 0px;
    font-size: 16px;
    min-height: 53px;
    margin-bottom: 0;
    border: none;
    border-radius: 0;
}

</style>
