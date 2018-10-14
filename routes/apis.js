const fs = require('fs');
const out = fs.createWriteStream('info.log');
const err = fs.createWriteStream('error.log');
const logger = new console.Console(out, err);
logger.log('APIS');

var express = require('express');
var router = express.Router();

router.post('/func1', function(req, res, next) {
  var param = {"API":"func1","Res":req.body.param1};
  logger.log(req.body);
  res.send(param);
});

router.post('/func2', function(req, res, next) {
  var param = {"API":"func2","Res":req.body.param1};
  logger.log(req.body);
  res.send(param);
});

module.exports = router;
