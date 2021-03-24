
var express = require('express');
var router = express.Router();
var coinController = require("../controllers/coinController")

/* GET users listing. */

router.get('/', coinController.fetchAll)

router.post('/:id',coinController.addCoin)

router.get('/:id',coinController.fetchCoin)

router.put('/:id', coinController.updateCoin)

router.delete('/:id', coinController.deleteCoin)

router.post('/history/:id', coinController.fetchHistory)

module.exports = router;
