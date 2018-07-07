export default {
  auth (to, from, next) {
    /* global axios url */
    axios({
      method: 'post',
      headers: {
        token: window.localStorage.getItem('AccessToken')
      },
      url: url + '/guard'
    })
      .then(function (response) {
        next(true)
      })
      .catch(function (error) {
        next({
          path: '/admin/login',
          query: {
            redirect: to.name
          }
        })
        console.log(error)
      })
  }
}
