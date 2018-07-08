// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import url from './config/config'
Vue.config.productionTip = false
window.moment = require('moment')
window.axioslogin = require('axios')
window.axios = require('axios').create({
  baseURL: url.url,
  timeout: 1000
})
window.url = url.url
Vue.prototype.$eventbus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
