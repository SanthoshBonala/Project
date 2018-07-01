<template>
   <div class="col-sm-12 col-xs-12 row">
       <LeftNavbar></LeftNavbar>
       <AdminShow></AdminShow>
   </div>
</template>

<script>
import AdminShow from './AdminShow.vue'
import LeftNavbar from './AdminNavbar.vue'
export default {
  components: {
    AdminShow,
    LeftNavbar
  }
}
</script>

<style scoped>

</style>
