var express = require('express');
var router = express.Router();
var multer = require('multer')
var adminAuthenticateController = require('./controllers/authenticate.controller')
var AdminController = require('./controllers/CRUDadmin.controller') 
var ShowController = require('./controllers/show.controller')

/* Admin CRUD Operations */
router.post('/authenticate', adminAuthenticateController.authenticate);

router.post('/addadmin', AdminController.addadmin);

router.post('/deleteadmin', AdminController.deleteadmin);

router.get('/all', AdminController.GetAdminList);

router.post('/updateadmin', AdminController.UpdateAdmin );

/* Show CRUD Operations */
router.post('/addshow', multer().single('ShowImage'), ShowController.addShow);

router.get('/showlist', ShowController.GetShowList);

router.post('/updateshow', ShowController.UpdateShow);

router.post('/deleteshow', ShowController.deleteShow);

router.post('/guard', adminAuthenticateController.guard);

router.get('/image', ShowController.imagebyid);

module.exports = router;