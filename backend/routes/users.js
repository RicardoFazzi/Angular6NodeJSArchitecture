var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(db.collection('users').find());
});


router.post('/', function(req, res, next) {
  db.collection('users').save(req.body, (err, result) => {
    if(err) {
      throw err;
    } else {
      console.log('Saved ' + result);
      res.redirect('/');
    }
  })
});

module.exports = router;
