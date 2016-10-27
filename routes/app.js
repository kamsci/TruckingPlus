var express = require('express');
var router = express.Router();
var Job = require('../models/job');

/* GET data */
router.get('/job-data', function(req, res, next) {
  console.log("route hit");
  Job.find({}, function (err, result) {
        if (err) {
            return res.status(404).json({
                title: "Error in save message",
                error: err.message,
            });
        };
        res.status(200).json({
            title: "Save success",
            result: result
        });
    })
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
