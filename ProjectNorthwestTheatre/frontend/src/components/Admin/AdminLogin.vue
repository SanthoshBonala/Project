<template>
    <div id="AdminLogin">
        <form class="form-signin" @submit.prevent = "formsubmit" >
         <img class="mb-4" src="../../assets/logoproject.jpg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" v-model="formdata.email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" v-model="formdata.password" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
    data () {
        return {
          formdata : { 
            email : '',
            password : ''
          }
        }
    },
    methods: {
      formsubmit(){
        console.log(this.formdata)
      }
    }
}
</script>

<style scoped>

html,body {
  height: 100%;
}

body {
  align-items: center;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  text-align: center!important;
}
#AdminLogin{
    padding-top: 50px;
    text-align: center!important;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
