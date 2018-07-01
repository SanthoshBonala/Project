<template>
   <div class="col-sm-12 col-xs-12 row">
      This is a dashboard
       <LeftNavbar></LeftNavbar>
       <AdminShow></AdminShow>
    <hr>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Add Show
    </button>

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
            <form>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Show Name:</label>
                <input class="col-sm-7 form-control" type="text" id="showname">
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Playwright:</label>
                <input class="col-sm-7 form-control" type="text" id="playwright">
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Description:</label>
                <input class="col-sm-7 form-control" type="text" id="description">
              </div>
              <div class="form-group row">
                <label class="col-sm-4 form-label">Show Date:</label>
                <input class="col-sm-7 form-control" type="date" id="showdate" />
              </div>
                <div class="form-group row">
                <label class="col-sm-4 form-label">Show Time:</label>
                 <input class="col-sm-7 form-control" type="time" :value="showtime" id="showtime">
              </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Total Seats:</label>
                  <input class="col-sm-7 form-control" type="number" id="totalseats">
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Venue:</label>
                  <input class="col-sm-7 form-control" type="text" id="showvenue">
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Show Rating:</label>
                  <select id="inputState" class="form-control col-sm-7">
                    <option selected>Choose...</option>
                    <option>A</option>
                    <option>U/A</option>
                    <option>R</option>
                  </select>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Adult Price:</label>
                  <input class="col-sm-7 form-control" type="number" id="adultprice">
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Children Price:</label>
                  <input class="col-sm-7 form-control" type="number" id="childrenprice">
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 form-label">Upload Image:</label>
                  <div class="form-group col-sm-7">
                    <input type="file" class="form-control-file" id="InputFile" aria-describedby="fileHelp">
                    <small id="fileHelp" class="form-text text-muted"></small>
                  </div>
                </div>
                <button type="submit" class="btn btn-danger">Reset</button>
                <button type="submit" class="btn btn-success">Add & Save</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AdminShow from './AdminShow.vue'
import LeftNavbar from './AdminNavbar.vue'
export default {
  name: 'AdminDashboard',
  data () {
    return {
      /* global moment  */
      showtime: moment().format('HH:mm:ss')
    }
  },
  components: {
    AdminShow,
    LeftNavbar
  }
}
</script>

<style scoped>

</style>
