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
    include: [db.id],
    // Here we specify we want to return our users in order by ascending last name
    order: [
      ["lastName", "ASC"]
    ]
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

// post route to create burgers
router.post("/TBD/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.User.create({
    burger_name: req.body.burger_name
  })
  // pass the result of our call
    .then(function(dbBurger) {
    // log the result to our terminal/bash window
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update", function(req, res) {
  // If we are given a customer, create the customer and give them this devoured burger
  if (req.body.customer) {
    db.Customer.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    })
      .then(function(dbCustomer) {
        return db.Burger.update({
          devoured: true
        }, {
          where: {
            id: req.body.burger_id
          }
        });
      })
      .then(function(dbBurger) {
        res.json("/");
      });
  }
  // If we aren't given a customer, just update the burger to be devoured
  else {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    })
      .then(function(dbBurger) {
        res.json("/");
      });
  }
});

module.exports = router;