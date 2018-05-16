var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

request('https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=1',  function (error, response, body) {
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(body));


});
});

module.exports = router;
