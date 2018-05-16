var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var rx = require('rxjs');



/* GET users listing. */
router.get('/', function(req, res, next) {
var observer = {
    next: function (value){
        res.json(value);
    },
    error: function (error){
        console.log(error);
    },
    complete:function(){
        console.log('Complete');
    }
};

   Rx.Observable.create(function(obs){
       obs.next(function(htmlstring){
           rp('https://status.heroku.com/api/v3/issues?since=2012-04-24&limit=1')
               .then(htmlstring)
               .catch(error)
               });})
           .subscribe(observer);
       }
   );

module.exports = router;