<template>
    <div class="col-md-12 col-sm-12 my-3">
      <div class="card shadow rounded mb-3" >
        <div class="card-header grey text-white">
          <div class="d-inline-block font-weight-bold float-left">
              <h1>The Magician</h1>
          </div>
          <div class="d-inline-block component float-right">
            <span class="mx-5" >
              <div class="btn-group rounded" id="status" data-toggle="buttons">
                <label class="btn btn-default btn-on active" style="border:2px solid white">
                  <input class="d-none" type="radio" value="1" name="" checked="checked">
                  <strong>Publish</strong>
                </label>
                <label class="btn btn-default btn-off" style="border:2px solid white">
                  <input class="d-none" type="radio" value="0" name="">
                  <strong>Un Publish</strong>
                </label>
              </div>
            </span>
            <button type="button" class="btn rounded-circle float-right" id="delete">
                <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="card-body green">
          <div class="content">
            <div class="row justify-content-around m-3 rounded  bg-light">
              <!-- image column -->
              <div class="col-lg ">
                <img src="../../assets/logoproject.jpg" class="rounded mx-5 my-5  w-50 " alt="...">
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
                  <span class="font-weight-normal">This show is about</span>
                </span>
                <br>
                <!-- Date -->
                <span class="font-weight-bold">Date :
                  <span class="font-weight-normal">23th August, 2018</span>
                </span>
                <br>
                <!-- Time  -->
                <span class="font-weight-bold">Time :
                  <span class="font-weight-normal">3:00 PM CST</span>
                </span>
                <br>
                <!-- Venue -->
                <span class="font-weight-bold">Venue :
                  <span class="font-weight-normal">Ron Houston</span>
                </span>
                <br>
                <!-- Rating -->
                <span class="font-weight-bold">Rating :
                  <span class="font-weight-normal">UA</span>
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
                    <span class="font-weight-normal">30</span>
                  </span>
                  <br>
                  <!-- Reserved Seats -->
                  <span class="px-3 font-weight-bold">Reserved :
                    <span class="font-weight-normal">20</span>
                  </span>
                  <br>
                  <!-- Remaining Seats -->
                  <span class="px-3  font-weight-bold">Remaining :
                    <span class="font-weight-normal">10</span>
                  </span>
                  <br>
                </div>
                <!-- Adult Ticket -->
                <h1 class="mt-2 text-danger text-center lead">
                    <span class="font-weight-bold display"> $ 5.99 </span>
                    <span class="font-weight-normal">For Adult</span>
                </h1>
                <!-- Children Ticket -->
                <h1 class="text-danger text-center lead">
                    <span class="font-weight-bold display"> $ 2.99 </span>
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
  methods: {
    emitevent () {
      this.$emit('showmodal')
    },
    emailevent () {
      this.$emit('showemailmodal')
    },
    editevent () {
      this.$emit('editeventmodal')
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
