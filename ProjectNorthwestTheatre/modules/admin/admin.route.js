var express = require('express');
var router = express.Router();
var adminRegistrationController = require('./controllers/registration.controller')
var adminAuthenticateController = require('./controllers/authenticate.controller')

router.post('/create', adminRegistrationController.registration);

router.post('/authenticate', adminAuthenticateController.authenticate);

module.exports = router;