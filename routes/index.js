var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {

    request("https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=10", function (error, response, body) {
        var c=JSON.parse(body);
        var length = Object.keys(c[0]).length;
        console. log (c[0]);
        res.render('index', {
            title: 'Heroku status as of today',
            c: c,
            length : length
        });

    });
});

module.exports = router;
