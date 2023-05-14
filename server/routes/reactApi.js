var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const result = {
    msg : "hi !! reAct",
    code: 200
  }
  res.send(result);
});

module.exports = router;
