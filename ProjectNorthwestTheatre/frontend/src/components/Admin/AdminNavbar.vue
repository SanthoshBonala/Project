<template>
<div class="container-fluid">
    <div class="sticky-top">
        <nav class="navbar bg-dark text-light sticky-top">
            <a href="" data-target="#sidebar" data-toggle="collapse" class="d-md-none" id="show_content">
                <i class="fa fa-bars"></i>
            </a>
            <router-link class="navbar-brand" to="/admin/dashboard">Northwest Theatre</router-link>
            <button class="btn btn-primary" @click="logout()" v-if="login">Logout</button>
        </nav>
    </div>
    <div id="adminnavbar" class="row">
        <div class="col-sm-2 collapse d-sm-flex position-fixed" id="sidebar">
            <div class="col-sm-10 bg-dark pt-2" v-if="login">
                <ul class="nav flex-column flex-nowrap ">
                    <li class="nav-item my-2">
                        <router-link to="/admin/adminlist" class="btn btn-primary btn-block">Admin List</router-link>to="admin/" 
                    </li>
                    <li class="nav-item my-2">
                        <router-link to="/admin/addadmin" class="btn btn-primary btn-block">Add Admin</router-link>to="admin/" 
                    </li>
                    <li class="nav-item my-2">
                        <router-link to="/admin/" class="btn btn-primary btn-block">Section List</router-link>to="admin/" 
                    </li>
                    <li class="nav-item my-2">
                        <router-link to="/admin/addsection" class="btn btn-primary btn-block">Add Section </router-link>to="admin/" 
                    </li>
                    <li class="nav-item my-2">
                        <button class="btn btn-primary btn-block" @click="addshowevent()">Add Show </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-sm-10 offset-sm-2" id="rem_content">
            <slot class="col-sm-12"></slot>
        </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Add New Show Details:</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <form @submit.prevent="addshow" id="addshow">
              <div class="form-group row">
                <label class="col-sm-4 form-label">Show Name:</label>
                <input class="col-sm-7 form-control" type="text" id="showname" v-model="formdata.ShowTitle" required>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Playwright:</label>
                <input class="col-sm-7 form-control" type="text" id="playwright" v-model="formdata.ShowPlaywright" required>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Description:</label>
                <input class="col-sm-7 form-control" type="text" id="description" v-model="formdata.ShowDescription" required>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Show Date:</label>
                <input class="col-sm-7 form-control" type="date" id="showdate" v-model="formdata.ShowDate" required>
              </div>
                <div class="form-group row">
                <label class="col-sm-4 form-label">Show Time:</label>
                 <input class="col-sm-7 form-control" type="time" :value="showtime" id="showtime" required>
              </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Total Seats:</label>
                  <input class="col-sm-7 form-control" type="number" id="totalseats" v-model="formdata.NumberOfTickets" required>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Venue:</label>
                  <input class="col-sm-7 form-control" type="text" id="showvenue" v-model="formdata.ShowVenue" required>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Show Rating:</label>
                  <select id="inputState" class="form-control col-sm-7" required v-model="formdata.ShowRating" >
                    <option selected>Choose...</option>
                    <option>A</option>
                    <option>U/A</option>
                    <option>R</option>
                  </select>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Adult Price:</label>
                  <input class="col-sm-7 form-control" type="number" id="adultprice" v-model="formdata.ShowPrice" required>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Children Price:</label>
                  <input class="col-sm-7 form-control" type="number" id="childrenprice" required>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Upload Image:</label>
                  <div class="form-group col-sm-7">
                    <input type="file" class="form-control-file" id="InputFile" aria-describedby="fileHelp" required>
                    <small id="fileHelp" class="form-text text-muted"></small>
                  </div>
                </div>
                 <div class="form-group row">
                   <label class="col-sm-4 form-label">Publish:</label>
              <label class="switch float-right form-group">
                <input type="checkbox" class="sliderinput" v-model="formdata.isPublished" required>
                <span class="slider round"></span>
              </label>
            </div>
            <div class="">
                <button type="reset" class=" btn btn-danger">Reset</button>
                <button type="submit" class=" btn btn-success">Add & Save</button>
            </div>
             </form>
            </div>
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
      pathname: '',
      formdata: {
        ShowTitle: '',
        ShowPlaywright: '',
        ShowDescription: '',
        ShowDate: '',
        NumberOfTickets: 0,
        ShowVenue: '',
        ShowRating: '',
        ShowPrice: 0,
        isPublished: false
      },
      /* global moment  */
      showtime: moment().format('HH:mm:ss'),
    }
  },
  props: ['login'],
  methods: {
    logout () {
      window.localStorage.clear()
      var _this = this
      _this.$router.push('/admin/login')
    },
    addshowevent () {
      console.log(this.$eventbus)
      this.$eventbus.$emit('addshow')
    },
    addshow () {
      console.log(this.formdata)
      /* global $ axios url */
      axios.create({
        baseURL: url,
        timeout: 1000,
        headers: { 'token': window.localStorage.getItem('AccessToken') }
      }).post('/addadmin', this.formdata)
        .then(function (response) {
          console.log(response)
          $('#myModal').modal('hide')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.$eventbus.$on('addshow', function () {
    console.log('detected')
    $('#myModal').modal('show')
    })
  }
}
/* global $ */
$(function () {
  function myFunction1 () {
    $('#sidebar').toggle()
  }
  function myFunction () {
    $('#sidebar').hide()
  }
  if (document.getElementById('rem_content')) {
    document.getElementById('rem_content').addEventListener('click', myFunction)
  }
  document.getElementById('show_content').addEventListener('click', myFunction1)
})

</script>

<style scoped>
#sidebar {
    min-height: 100%;
    z-index: 1;
}
.container-fluid {
    padding-right:0;
    padding-left:0;
    margin-right:auto;
    margin-left:auto
 }
</style>
