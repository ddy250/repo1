var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET home page. */
router.get('/', function (req, res, next) {

    rp("https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=10")
        .then(function (body) {
            var c = JSON.parse(body);
            res.render('index', {
                title: 'Heroku status as of today',
                c: c,
            });

        })
        .catch(function (error) {
            console.log(error)
        });
});

module.exports = router;
