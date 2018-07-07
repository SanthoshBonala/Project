<template>
<div>
    <nav class="navbar navbar-light text-light bg-dark sticky-top">
        <a href="" data-target="#sidebar" data-toggle="collapse" class="d-md-none" id="show_content">
            <i class="fa fa-bars"></i>
        </a>
        <a class="navbar-brand">Northwest Theatre</a>
        <button class="btn btn-primary" @click="logout()" v-if="login">Logout</button>
    </nav>
    <div class="container-fluid " id="adminnavbar">
        <div class="row">
            <div class="col-1 collapse d-md-flex bg-dark pt-2   " id="sidebar" v-if="login">
                <ul class="nav flex-column flex-nowrap ">
                    <li class="nav-item my-2">
                        <button class="btn btn-primary ">Admin List</button>
                    </li>
                    <li class="nav-item my-2">
                        <button class="btn btn-primary ">Add Admin</button>
                    </li>
                    <li class="nav-item my-2">
                        <button class="btn btn-primary ">Section List</button>
                    </li>
                    <li class="nav-item my-2 ">
                        <button class="btn btn-primary ">Add Section </button>
                    </li>
                </ul>
            </div>
             <div class="col-2 d-none d-md-block" >
            </div>
            <div class="col" id="rem_content">
                <router-view/>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'AdminNavbar',
  data () {
    return {
      pathname: ''
    }
  },
  props: ['login'],
  methods: {
    logout () {
      window.localStorage.clear()
      var _this = this
      _this.$router.push('/admin/login')
    }
  }
}
/* global $ */
$(function () {
  function myFunction1 () {
    $('#sidebar').toggle()
  }
  if (document.getElementById('rem_content')) {
    function myFunction () {
      $('#sidebar').hide()
    }
    document.getElementById('rem_content').addEventListener('click', myFunction)
  }
  document.getElementById('show_content').addEventListener('click', myFunction1)
})

</script>

<style scoped>
#sidebar {
  min-width: 150px;
  min-height: 37em;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1;
}

.sidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 160px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 8; /* Stay at the top */
    left: 0;
    background-color: rgb(75, 69, 69); /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
}

</style>
