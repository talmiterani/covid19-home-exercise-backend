
var express = require('express');
var router = express.Router();
var controller = require("../controllers/Controller")

router.get('/', controller.fetchAll)

router.get('/states', controller.fetchAllStates)

router.get('/statesDetails', controller.fetchAllStatesDetails)

router.get('/usDaily', controller.fetchUsDaily)

module.exports = router;
