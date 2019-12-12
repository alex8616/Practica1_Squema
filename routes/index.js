var express = require('express');
var router = express.Router();
var USER = require('../database/persona');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', function(req,res,next){
    res.status(200).json({
        msn:"Practica N 1"
    });
});


router.post('/persona', async(req, res) => {
    var params = req.body;
    var persona =  new USER(params);
    var result = await persona.save();
    res.status(200).json(result);
});

router.get('/getpersona', async(req, res) => {
  var params = req.query;
  USER.find({}).limit(1000).sort({_id: 0}).exec((err,docs) => {
    res.status(200).json(docs);
    });
});

module.exports = router;
