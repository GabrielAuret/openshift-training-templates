var express = require('express');
var router = express.Router();

/* GET greeting */
// router.get('/greeting', function(req, res, next) {
//   res.send(
//     { "greeting": "Hello, world!" }
//   );
// });


/* GET home page. */
router.get('/greeting', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send(
  //   { "greeting": "Hello, world!" }
  // );
});

module.exports = router;
