var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

request('https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=1',  function (error, response, body) {
    res.render('index', {
        title : 'oded',
        title2: JSON.stringify(body)}
 );

});
});

module.exports = router;
