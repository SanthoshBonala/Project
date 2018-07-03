<template>

  <form class="justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">Add Admin</h1>
  <div class="form-group row justify-content-center">
    <label for="username" class="col-sm-2 col-form-label">Username:</label>
    <div class="col-sm-4">
      <input type="username" class="form-control" id="username" placeholder="Username">
    </div>
  </div>
  <div class="form-group row justify-content-center">
    <label for="email" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-4">
      <input type="email" class="form-control" id="email" placeholder="email">
    </div>
  </div>
  <div class="form-group row justify-content-center">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
    <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
   <div class="form-group row justify-content-center">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password:</label>
    <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
<button type="submit" class="btn btn-danger">Reset</button>
<button type="submit" class="btn btn-success">Create Admin</button>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
