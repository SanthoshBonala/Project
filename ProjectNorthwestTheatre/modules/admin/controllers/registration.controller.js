var mongoose = require('mongoose')
var adminModel = require('../../../models/Admin.model')

let registration = (req,res,next) => {
    var admin = new adminModel({
        Username : req.body.RegUsername,
        Password : req.body.RegPassword
    })
    admin.save((err) => {
        if (err) {
            return res.status(400).send(err.message)
        }
               res.send('Admin Added successfully')
    })
}

module.exports.registration = registration