const mongoose = require('mongoose');
var dburl = require('./config');

mongoose.connect(dburl)
.then( res => {
    console.log('DB Connected',res)
})
.catch( err => {
    console.log('Error: ',err);
})