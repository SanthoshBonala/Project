<template>
<form class="justify-content-center" @submit.prevent="addsection" id="addsection">
<h1 class="h3 mb-3 font-weight-normal">Add Section</h1>
<div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Professor Name:</label>
                <input class="col-sm-4 form-control" type="text" id="profname" name="ProfessorName">
              </div>
  <div class="form-group row justify-content-center">
                  <label class="col-sm-2 form-label">Day:</label>
                  <select id="inputState" class="col-sm-4 form-control" name="ClassDay" required v-model="formdata.ShowRating" >
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
                <label class="col-sm-2 form-label">Section Time:</label>
                 <input class="col-sm-4 form-control" type="time"  id="sectiontime" name="ClassTime" required>
              </div>
  <div class="form-group row justify-content-center">
                <label class="col-sm-2 form-label">Section Number:</label>
                <input class="col-sm-4 form-control" type="text" id="secnumber" name="SectionNumber">
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
        ShowRating: ''
      }
    }
  },
  methods: {
    addsection () {
      console.log(new FormData(document.querySelector('#addsection')).get('ClassTime'))
    }
  }
}
</script>
<style scoped>

</style>
