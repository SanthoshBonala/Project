var mongoose = require('mongoose')
var adminModel = require('../../../models/Admin.model')

let authenticate = (req,res,next) => {

    adminModel.findOne({ Username: req.body.Username }, function (err, user) {
        if (err) res.status(401).send("Unauthorized");
        user.comparePassword(req.body.Password, function (err, isMatch) {
            if (err) res.status(401).send("Unauthorized");
            res.send("Login successfull");
        });
    })

}

module.exports.authenticate = authenticate;