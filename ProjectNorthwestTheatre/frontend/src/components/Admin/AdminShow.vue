<template>
  <div class="col-sm-8 col-xs-8">
       This is a Show
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal1">
      Reserve Tickets
    </button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#emailmodal">
      Email
    </button>
    <!-- The Modal -->
    <div class="modal" id="emailmodal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Email</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label class="col-sm-2 form-label">Subject:</label>
                <input class="col-sm-10 form-control" type="text" id="emailSubject">
              </div>
              <div class="form-group row">
                <label for="Email1msg" class="col-sm-2 control-label">Message:</label>
                <div class="col-sm-10">
                  <textarea class="form-control inputstl" rows="10"></textarea>
                </div>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Submit</button>
      </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="Modal1" aria-hidden="true">
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
  </div>
</template>

<script>
export default {
  name: 'AdminShow',
  data () {
    return {
      /* global $ */
      check: false,
      isTheatreAppreciationStudent: ''
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

</style>
