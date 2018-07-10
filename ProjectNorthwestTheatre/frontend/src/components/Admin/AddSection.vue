<template>
<form class="justify-content-center">
<h1 class="h3 mb-3 font-weight-normal">Add Section</h1>
<div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Professor Name:</label>
                <input class="col-sm-4 form-control" type="text" placeholder="Professor Name" id="profname">
              </div>
  <div class="form-group row justify-content-center">
                  <label class="col-sm-2 form-label">Day:</label>
                  <select id="inputState" class="col-sm-4 form-control" required v-model="formdata.ShowRating" >
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
                <input class="col-sm-4 form-control" type="text" placeholder="Section Number" id="secnumber" >
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
