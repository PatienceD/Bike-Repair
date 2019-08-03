//this is example code

var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/");
});

// get route, edited to match sequelize
router.get("/clients", function(req, res) {
  // replace old function with sequelize function
  db.User.findAll({
  })
  // use promise method to pass the user...
    .then(function() {
    // into the main index, updating the page
      var hbsObject = {
        user: firstName + lastName
      };
      return res.render("index", hbsObject);
    });
});


module.exports = router;