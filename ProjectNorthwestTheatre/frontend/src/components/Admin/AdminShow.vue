<template>
    <div class="col-md-12 col-sm-12 my-3">
      <div class="card shadow rounded mb-3" >
        <div class="card-header grey text-white">
          <div class="d-inline-block font-weight-bold float-left">
              <h1>{{ show.ShowTitle }}</h1>
          </div>
          <div class="d-inline-block component float-right">
            <span class="mx-5" >
              <div class="btn-group rounded" id="status" data-toggle="buttons">
                <label class="btn btn-default btn-on" style="border:2px solid white" :class="{ active: show.isPublished }">
                  <input class="d-none" type="radio" value="1">
                  <strong>Publish</strong>
                </label>
                <label class="btn btn-default btn-off" style="border:2px solid white" :class="{ active: !show.isPublished }">
                  <input class="d-none" type="radio" value="0" >
                  <strong>Un Publish</strong>
                </label>
              </div>
            </span>
            <button type="button" class="btn rounded-circle float-right" id="delete" @click="deleteshow">
                <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="card-body green">
          <div class="content">
            <div class="row justify-content-around m-3 rounded  bg-light">
              <!-- image column -->
              <div class="col-lg ">
                <img :src="`http://localhost:3000/admin/image?_id=${show._id}&token=${token}`" class="rounded mx-5 my-5  w-50 " alt="Image">
              </div>
              <!-- image column end -->
              <!-- details of the show -->
              <div class="col-lg lead text-left font" style="border:1px  ">
                <!-- Playwright -->
                <span class="font-weight-bold">Playwright :
                  <span class="font-weight-normal">By John</span>
                </span>
                <br>
                <!-- Description -->
                <span class="font-weight-bold">Description :
                  <span class="font-weight-normal">{{ show.ShowDescription }}</span>
                </span>
                <br>
                <!-- Date -->
                <span class="font-weight-bold">Date :
                  <span class="font-weight-normal">{{ ShowDate }}</span>
                </span>
                <br>
                <!-- Time  -->
                <span class="font-weight-bold">Time :
                  <span class="font-weight-normal">{{ ShowTime }}</span>
                </span>
                <br>
                <!-- Venue -->
                <span class="font-weight-bold">Venue :
                  <span class="font-weight-normal">Ron Houston</span>
                </span>
                <br>
                <!-- Rating -->
                <span class="font-weight-bold">Rating :
                  <span class="font-weight-normal">{{ show.ShowRating}}</span>
                </span>
                <br>
              </div>
              <!-- details of the show END -->
              <div class="col-lg lead" style="border:1px ">
                <div class="component pb-1 mt-1 text-left seats_rounded bg-success text-light " style="border:2px solid grey">
                  <!-- Seats Heading -->
                  <p class="font-weight-bold text-center rounded ">
                    SEATS
                  </p>
                  <!-- Total Seats -->
                  <span class="px-3  font-weight-bold">Total :
                    <span class="font-weight-normal">{{ show.NumberOfTickets }}</span>
                  </span>
                  <br>
                  <!-- Reserved Seats -->
                  <span class="px-3 font-weight-bold">Reserved :
                    <span class="font-weight-normal">20</span>
                  </span>
                  <br>
                  <!-- Remaining Seats -->
                  <span class="px-3  font-weight-bold">Remaining :
                    <span class="font-weight-normal">{{ show.NumberOfTickets - 20 }}</span>
                  </span>
                  <br>
                </div>
                <!-- Adult Ticket -->
                <h1 class="mt-2 text-danger text-center lead">
                    <span class="font-weight-bold display"> $ {{ show.ShowPrice }} </span>
                    <span class="font-weight-normal">For Adult</span>
                </h1>
                <!-- Children Ticket -->
                <h1 class="text-danger text-center lead">
                    <span class="font-weight-bold display"> $ {{ show.ShowPrice }} </span>
                    <span class="font-weight-normal">For Children</span>
                </h1>
              </div>
            </div>
            <!-- buttons inside the card -->
            <div class="row justify-content-around m-2 bg-white rounded " style="border:1px ">
              <button class="col-sm m-2 btn btn-outline-primary" type="button"
              @click="emailevent()">
                <strong>Email</strong>
              </button>
              <button class="col-sm m-2 btn btn-outline-warning" type="button">
                <strong>Generate Report</strong>
              </button>
              <button class="col-sm m-2 btn btn-outline-success" type="button" @click="emitevent()">
                <strong>Reserve Tickets</strong>
              </button>
              <button class="col-sm m-2 btn btn-outline-secondary" type="button"
              @click="editevent()">
                <strong>Edit Show</strong>
              </button>
            </div>
          <!-- end buttons inside card -->
          </div>
          <!-- card-content-body -->
        </div>
      <!-- card-body -->
      </div>
    <!-- card -->
    <!-- Modal -->
  </div>
</template>

<script>
export default {
  name: 'AdminShow',
  data () {
    return {
      /* global moment */
      ShowDate: moment.utc(this.show.ShowDate).format('MMMM Do YYYY'),
      ShowTime: moment.utc(this.show.ShowDate).format('h:mm:ss a'),
      token: window.localStorage.getItem('AccessToken')
    }
  },
  props: ['show'],
  methods: {
    emitevent () {
      this.$emit('showmodal')
    },
    emailevent () {
      this.$emit('showemailmodal')
    },
    editevent () {
      this.$emit('editeventmodal')
    },
    deleteshow () {
      /* global swal axios url */
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.value) {
            axios.create({
              baseURL: url,
              timeout: 1000,
              headers: { 'token': window.localStorage.getItem('AccessToken') }
            }).post('/deleteshow', { id: this.show._id })
              .then(res => {
                swal(
                  'Deleted!',
                  'Show has been deleted.',
                  'success'
                )
                axios({
                  method: 'get',
                  headers: {
                    token: window.localStorage.getItem('AccessToken')
                  },
                  url: url + '/showlist'
                })
                  .then(response => {
                    this.$eventbus.$emit('refreshdata', response.data)
                  })
                  .catch(err => {
                    console.log('error while getting show list', err)
                  })
              })
              .catch(error => {
                console.log(error)
              })
          }
        })
    }
  }
}
</script>

<style scoped>
  #delete:hover {
    color: #910000;
    background-color: #DA7A7A
  }
  #delete {
    color: #D14F4F;
    background-color: none
  }
  .btn-default.btn-on.active {
      background-color: #5BB75B;
      color: white;
  }

  .btn-default.btn-off.active {
      background-color: #DA4F49;
      color: white;
  }

  .btn-default.btn-on-1.active {
      background-color: #006FFC;
      color: white;
  }

  .btn-default.btn-off-1.active {
      background-color: #DA4F49;
      color: white;
  }

  .btn-default.btn-on-2.active {
      background-color: #00D590;
      color: white;
  }

  .btn-default.btn-off-2.active {
      background-color: #A7A7A7;
      color: white;
  }

  .btn-default.btn-on-3.active {
      color: #5BB75B;
      font-weight: bolder;
  }

  .btn-default.btn-off-3.active {
      color: #DA4F49;
      font-weight: bolder;
  }

  .btn-default.btn-on-4.active {
      background-color: #006FFC;
      color: #5BB75B;
  }

  .btn-default.btn-off-4.active {
      background-color: #DA4F49;
      color: #DA4F49;
  }

  .green {
      background-color: rgb(0, 92, 50);
  }
  .grey {
      background-color: #A9A9A9;
  }
  .seats_rounded {
      border-radius: 10%;
  }
  .font1{
    font-size:8vw;
  }
</style>
