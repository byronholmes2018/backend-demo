var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.status(200).send({data:'Good job, you connected'});
});

module.exports = router;
