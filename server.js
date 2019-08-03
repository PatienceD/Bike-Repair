const express = require("express");
const db = require("./models");
<<<<<<< HEAD
const routes = require("./controllers/bike-controller.js");
=======
const routes = require("../Bike-Repair/controllers/bike-controller.js");
>>>>>>> d0d91e0b9cbda4d5a51692a58457c13198dca2a1
const app = express();
var mysql = require("mysql");
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Add routes, both API and view
app.use(routes);

//Connect to SQL
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
