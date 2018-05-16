var express = require('express');
var router = express.Router();
var rp = require('request-promise');


/* GET users listing. */
router.get('/', function(req, res, next) {
  rp('https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=1')
      .then(function(htmlstring){
        res.json(htmlstring);
      })
      .catch(function(err){
        console.log(err);
      })
});

module.exports = router;
