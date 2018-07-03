<template>
   <div>
     <button type="button" class="btn btn-primary float-right m-2" data-toggle="modal" data-target="#myModal">
      <i class="fas fa-plus"></i>
    </button>
    <AdminShow @showmodal="showmodal()" class="m-5"></AdminShow>
    <hr>
    <div class="modal fade" id="ReserveTickets" tabindex="-1" role="dialog" aria-labelledby="ReserveTickets" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Enter Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
                  <div class="form-group row">
                    <label class="col-sm-4 form-label">First Name:</label>
                    <input class="col-sm-7 form-control" type="text" id="firstname">
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-4 form-label">Last Name:</label>
                    <input class="col-sm-7 form-control" type="text" id="lastname">
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-4 form-label">Email:</label>
                    <input class="col-sm-7 form-control" type="text" id="email">
                  </div>
                    <fieldset class="form-group">
                        <div class="row">
                          <legend class="col-form-label col-sm-8 pt-0">Are you a theatre appreciation student?</legend>
                          <div class="col-sm-4">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="true" v-model="isTheatreAppreciationStudent">
                              <label class="form-check-label" for="yes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="false" v-model="isTheatreAppreciationStudent">
                              <label class="form-check-label" for="no">No</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group row" :class="{'d-none': isTheatreAppreciationStudent !== 'true' }">
                          <label class="col-sm-4 form-label">Section Number:</label>
                          <input class="col-sm-7 form-control" type="text" id="sectionnumber">
                          <a tabindex="0"
                            id="pop"
                            class="btn col-sm-1"
                            role="button"
                            data-html="true"
                            data-toggle="popover"
                            data-trigger="hover"
                            data-placement="right"
                            title="Schedule For Current Semester">
                            <i class="fas fa-info-circle"></i>
                        </a>
                        </div>
                        <div class="form-group row" :class="{'d-none': isTheatreAppreciationStudent !== 'false' }">
                            <label class="col-sm-4 form-label">No. Of Tickets:</label>
                            <select id="inputState" class="form-control col-sm-7">
                              <option selected v-for="ele of [1,2,3,4,5,6,7,8,9,10]" :key="ele">{{ele}}</option>
                            </select>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-danger">Reset</button>
                    <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <table :class="{'d-none': check }">
      <thead>
        </thead>
        <tr>
          <th>Professor</th>
          <th>Class Meeting</th>
          <th>Day</th>
        </tr>
      <tbody>
        <tr>
          <td>Bob John</td>
          <td>08:00 AM</td>
          <td>Monday</td>
        </tr>
        <tr>
          <td>Bob John</td>
          <td>08:00 AM</td>
          <td>Monday</td>
        </tr>
        <tr>
          <td>Bob John</td>
          <td>08:00 AM</td>
          <td>Monday</td>
        </tr>
        <tr>
          <td>Bob John</td>
          <td>08:00 AM</td>
          <td>Monday</td>
        </tr>
      </tbody>
    </table>
    <!-- The Modal -->
    <div class="modal" id="myModal">
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
import AdminShow from './AdminShow.vue'

export default {
  name: 'AdminDashboard',
  data () {
    return {
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
      /* global $ */
      check: false,
      isTheatreAppreciationStudent: ''
    }
  },
  components: {
    AdminShow
  },
  methods: {
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
    },
    showmodal () {
      $('#ReserveTickets').modal('show')
    }
  },
  mounted () {
    $('#pop').popover({
      content: $('table')[0].outerHTML
    })
    console.log('mounted')
    this.check = true
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch .sliderinput {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.sliderinput:checked + .slider {
  background-color: green;
}

.sliderinput:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.sliderinput:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
