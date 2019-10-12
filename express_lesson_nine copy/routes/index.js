/* var express = require('express');
var router = express.Router();
var staticModels = require("../staticModels/planets"); */

/* GET home page. */
/* router.get('/staticPlanets', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/staticPlanets", function(req, res, next) {
  res.send(JSON.stringify(staticModels.planet));
});

module.exports = router;
 */

var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const staticModels = require('../staticModels/staticPlanets');
const models = require('../models');

router.get('/starTrekplanets', function (req, res, next) {
    var planets = [
      {id: 1, name: "Q'onoS", numberOfMoons: 1 },
      {id: 2, name: "Vulcan", numberOfMoons: 0 },
      {id: 3, name: "Earth", numberOfMoons: 1 },
      {id: 4, name: "Rator III", numberOfMoons: 0 }
    ];
  res.send(JSON.stringify(planets));
},
router.get('/staticPlanets', function(req, res, next) {
  res.send(JSON.stringify(staticModels.planets));
}));

module.exports = router;