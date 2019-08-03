const express = require("express");
const db = require("./models");
const routes = require("../Bike-Repair/controllers/bike-controller.js");
const app = express();
var mysql = require("mysql");
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Add routes, both API and view
app.use(routes);

//Connect to SQL
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
