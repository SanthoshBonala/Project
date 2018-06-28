var mongoose = require('mongoose')
var adminModel = require('../../../models/Admin.model')

let registration = (req,res,next) => {
    var admin = new adminModel({
        Username : req.body.Username,
        Password : req.body.Password
    })
    admin.save((err) => {
        if(err){
            console.log(err)
            res.status(400).send("Error while saving password")
        }
        res.json(admin)
    })
}

module.exports.registration = registration