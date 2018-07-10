<template>
<div class="card border-secondary my-3 w-75" >
  <div class="card-header"><strong ><h1> Add Section</h1></strong></div>
  <div class="card-body text-secondary">
    <form class="justify-content-center" @submit.prevent="addsection" id="addsection">
  
  <div class="form-group row justify-content-center">
    <label class="col-sm-4 text-right form-label">Professor Name:</label>
    <input class="col-sm-4 form-control" type="text" name="ProfessorName" placeholder="Professor Name" id="profname">
  </div>
  <div class="form-group row justify-content-center">
    <label class="col-sm-4 text-right form-label">Day:</label>
    <select id="inputState" class="col-sm-4 form-control" name="ClassDay" required >
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
    <label class="col-sm-4 text-right form-label">Section Time:</label>
      <input class="col-sm-4 form-control" type="time"  id="sectiontime" name="ClassTime" required>
  </div>
  <div class="form-group row justify-content-center">
    <label class="col-sm-4 text-right form-label">Section Number:</label>
    <input class="col-sm-4 form-control" type="number" placeholder="Section Number" name="SectionNumber" id="secnumber" >
  </div>
  <div class="form-group row justify-content-center">
    <label class="col-sm-4 text-right form-label">
    Semester:
    </label>
      <div class="col-sm-4 float-left">
        <div class="form-check form-check-inline col-sm-3">
          <input class="form-check-input" type="radio" name="Semester" id="yes" value="Fall">
          <label class="form-check-label" for="yes">Fall</label>
        </div>
        <div class="form-check form-check-inline col-sm-3">
          <input class="form-check-input" type="radio" name="Semester" id="no" value="Spring">
          <label class="form-check-label" for="no">Spring</label>
        </div>
        <div class="form-check form-check-inline col-sm-3">
          <input class="form-check-input" type="radio" name="Semester" id="no" value="Summer">
          <label class="form-check-label" for="no">Summer</label>
        </div>
      </div>
  </div>
  <div class="form-group row justify-content-center">
    <label class="col-sm-4 text-right form-label">
      Year:
    </label>
    <input class="col-sm-4 form-control" type="number" id="year" :min="Date().year" required>
  </div>
  <button type="submit" class="btn btn-success">Add section</button>
</form>
  </div>
</div>


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
    alert (header, msg, type) {
      swal(
        header,
        msg,
        type
      )
    },
    addsection () {
      var formdata = new FormData(document.querySelector('#addsection'))
      var data = {
        ProfessorName: formdata.get('ProfessorName'),
        ClassDay: formdata.get('ClassDay'),
        ClassTime: formdata.get('ClassTime'),
        SectionNumber: formdata.get('SectionNumber'),
        Semester: formdata.get('Semester'),
        Year: formdata.get('Year')
      }
       /* global axios url swal */
      axios.create({
        baseURL: url,
        headers: { 'token': window.localStorage.getItem('AccessToken') }
      }).post('/addsection', data)
        .then(res => {
          this.alert('Congratulations!','Section has been added successfully','success')
        })
        .catch(error => {
          this.alert(error.response.data, 'Please try again', 'error')
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>

</style>
