<template>
 <div>
    <!-- <div class="row m-1 float-right">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        <i class="fas fa-plus"></i>
      </button>
    </div> -->
    <div class="row col-sm-12 ">
      <UserShow v-for="ele of showlist" :key="ele._id"  :show="ele">
      </UserShow>
    </div>
    </div>
</template>

<script>
import UserShow from './UserShow.vue'
/* Saivarun Illendula - Added API Calls */
export default {
  name: 'AdminDashboard',
  data () {
    return {
      /* global $ axios url */
      sectionlist: [],
      showlist: []
    }
  },
  components: {
    UserShow
  },
  methods: {
    refreshData () {
      var _this = this
       /* global axios moment _ */
        axios({
          method: 'get',
          headers: {
            token: window.localStorage.getItem('AccessToken')
          },
          url: url + '/sectionlist'
        })
          .then(function (response) {
            console.log(response.data)
            _this.sectionlist = response.data
            _.each(_this.sectionlist, function(section){
              section.ClassTime12hrs = moment(section.ClassTime, 'HH:mm').format('hh:mm a')             
            })
          })
          .catch(function (err) {
            console.log('error while getting section list', err)
          })
      axios({
        method: 'get',
        headers: {
          token: window.localStorage.getItem('AccessToken')
        },
        url: url + '/showlist'
      })
        .then(function (response) {
          console.log(response.data)
          _this.showlist = response.data
        })
        .catch(function (err) {
          console.log('error while getting show list', err)
        })
       
    }
  },
  created () {
    this.refreshData()
    this.$eventbus.$on('refreshdata', function (data) {
      this.showlist = data
      console.log(data, this.showlist)
    }.bind(this))
  },
  watch: {
    showlist: function () {
      console.log('changed')
    }
  }
}
</script>

<style scoped>

</style>
