var express = require("express");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
// var path = require("path");

// get route, edited to match sequelize
router.get("/api/clients", function(req, res) {
  // replace old function with sequelize function
  db.User.findAll({})
    // use promise method to pass the user...
    .then(function(data) {
      // into the main index, updating the page
      res.json(data);
    });
});

router.get("/api/clients/:name", function(req, res) {
  var nameArry = req.params.name.split(" ");
  var firstName = nameArry[0];
  var lastName = nameArry[1] || nameArry[0];
  var search =
    firstName === lastName
      ? { [Op.or]: [{ firstName: firstName }, { lastName: lastName }] }
      : { firstName: firstName, lastName: lastName };
  db.User.findAll({
    where: search
  }).then(function(data) {
    res.json(data);
  });
});

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "/clients/build/index.html"));
// });

module.exports = router;
