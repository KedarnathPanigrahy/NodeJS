const express = require('express');
const app = express();
const router = require("./newRouter")


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log("1st middleware");
    next()
  }  

  app.use(requestTime);
//   app.use(bodyParser.json());

  app.use("/express", router);

app.get('/entry', (req, res) => {
    //   console.log(req.requestTime);
    // console.log(req.query);
    res.send('An alligator approaches!');
});

app.listen(3333, () => console.log('Gator app listening on port 3333!'));