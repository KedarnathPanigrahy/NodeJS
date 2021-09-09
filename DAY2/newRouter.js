var express = require('express');
var router = express.Router();

router.post('/delete', (req, res) => {
    //update records
    console.log(req.body);
    res.send('An alligator approaches post approach!');
})

router.all('/secret/*', function(req, res, next){
    console.log("HTTP method doesn't have any effect on this route!");
    // res.send("HTTP method doesn't have any effect on this route!");
    next()
 });

 router.get('/secret/entry', (req, res) => {
    console.log(req.requestTime);
      // console.log(req.query);
      res.send('An alligator approaches secret entry! /secret/entry');
  });  

  router.post('/', (req, res) => {
    //update records
    console.log(req.body);
    res.send('An alligator approaches post approach!');
})

module.exports = router;