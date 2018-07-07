<template>
  <div id="app">
    <Navbar :login="login"></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Admin/AdminNavbar.vue'
export default {
  name: 'App',
  data () {
    return {
      login: false
    }
  },
  components: {
    Navbar
  },
  watch: {
    $route (to, from) {
      console.log('updated')
      var _this = this
      if (_this.$route.name.name !== 'AdminLogin') {
        this.login = true
      } else {
        this.login = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
