<template>
<div>
    <nav class="navbar navbar-light text-light bg-dark">
        <a href="" data-target="#sidebar" data-toggle="collapse" class="d-md-none" id="show_content">
            <i class="fa fa-bars"></i>
        </a>
        <a class="navbar-brand">Northwest Theatre</a>
    </nav>
    <div class="container-fluid" id="adminnavbar">
        <div class="row">
            <div class="col-1 collapse d-md-flex bg-dark pt-2 h-100" id="sidebar">
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
            <div class="col pt-2" id="rem_content">
                <router-view/>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'AdminNavbar',
  props: {
  }
}
/* global $ */
$(function () {
  document.getElementById('rem_content').addEventListener('click', myFunction)
  function myFunction () {
    $('#sidebar').hide()
  }
  document.getElementById('show_content').addEventListener('click', myFunction1)
  function myFunction1 () {
    $('#sidebar').toggle()
  }
})

</script>

<style scoped>
#sidebar {
  min-width: 150px;
  min-height: 37em;
}
</style>
