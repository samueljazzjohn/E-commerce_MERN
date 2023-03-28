var express = require('express');
var router = express.Router();

// Endpoint to login
router.get('/login', function(req, res, next) {
  res.send('Hello Express');
});

// Endpoint to register
router.get('/register',function(req, res, next) {
  res.send('Hello Express');
});


module.exports = router;
