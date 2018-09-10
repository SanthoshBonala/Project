<template>
 <div>
    <div class="modal" id="descriptionmodal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Playwright: {{ show.ShowPlayWright ? show.ShowPlayWright : '' }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ show.ShowDescription ? show.ShowDescription : '' }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-sm-12 ">
      <UserShow v-for="ele of showlist" :key="ele._id"  :show="ele" v-if="ele.isPublished">
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
      showlist: [],
      show: ''
    }
  },
  components: {
    UserShow
  },
  methods: {
     showdescriptionmodal () {
      $('#descriptionmodal').modal('show')
    },
    refreshData () {
      var _this = this
       /* global axios moment _  userurl */
        axios({
          method: 'get',
          headers: {
            token: window.localStorage.getItem('AccessToken')
          },
          url: userurl + '/sectionlist'
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
        url: userurl + '/showlist'
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
    this.$eventbus.$on('showdescription', function (showclicked) {
    this.show = showclicked
    console.log('show description', this.show)
    this.showdescriptionmodal()
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
