<template>
<form class="justify-content-center">
<h1 class="h3 mb-3 font-weight-normal">Add Section</h1>
<div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Professor Name:</label>
                <input class="col-sm-4 form-control" type="text" placeholder="Professor Name" id="profname">
              </div>
  <div class="form-group row justify-content-center">
                  <label class="col-sm-2 form-label">Day:</label>
                  <select id="inputState" class="col-sm-4 form-control" required >
                    <option selected>Choose...</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </div>
  <div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Show Time:</label>
                 <input class="col-sm-4 form-control" type="time" :value="showtime" id="showtime" required>
              </div>
  <div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Section Number:</label>
                <input class="col-sm-4 form-control" type="number" placeholder="Section Number" id="secnumber" >
              </div>
            <div class="form-group row justify-content-center">
                        <label class="col-sm-2 form-label">Semester:</label>
                          <div class="col-sm-4 float-left">
                            <div class="form-check form-check-inline col-sm-3">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="true">
                              <label class="form-check-label" for="yes">Fall</label>
                            </div>
                            <div class="form-check form-check-inline col-sm-3">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="false">
                              <label class="form-check-label" for="no">Spring</label>
                            </div>
                            <div class="form-check form-check-inline col-sm-3">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="false">
                              <label class="form-check-label" for="no">Summer</label>
                            </div>
                          </div>
                        </div>
  <div class="form-group row justify-content-center">
      <label class="col-sm-2 form-label">Year:</label>
        <input class="col-sm-4 form-control" type="number" id="year" placeholder="Year" required>
  </div>
  <button type="submit" class="btn btn-success">Add section</button>
</form>
</template>

<script>
export default {
  name: 'AddSection',
  data () {
    return {
      formdata: {
        ShowRating: '',
        showtime: ''
      }
    }
  }
}
</script>
<style scoped>

</style>
