<template>
   <div>
        <Navbar></Navbar>
       <router-view></router-view>
   </div>

</template>

<script>
import Navbar from './components/User/UserNavbar.vue'
export default {
  name: 'App',
  components: { 
    Navbar
   }
}
</script>

<style scoped>

</style>
