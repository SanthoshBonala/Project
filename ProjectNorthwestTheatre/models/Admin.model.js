const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var AdminSchema = new mongoose.Schema({
    Username: {
        type: String,
        trim: true,
        required: [true, "Username required"]
    },
    Password: {
        type: String,
        trim: true,
        required: [true, "Password required"]
    }
})

AdminSchema.pre('save',function(next){
    var user = this;

    if (!user.isModified('Password')) return next();

    bcrypt.hash(user.Password,10)
    .then( hash => {
        console.log(hash)
        user.Password = hash
        next()
    })
    .catch( err => {
        next(err)
    })
    
})

AdminSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.Password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('Admin', AdminSchema)