var express = require('express');
const AuthController = require('../controllers/AuthController');

var router = express.Router();

router.post('/', AuthController.register);


module.exports = router;
