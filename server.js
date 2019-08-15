const express = require("express");
const db = require("./models");
const routes = require("./controllers/bike-controller.js");
const app = express();
var mysql = require("mysql");
const PORT = process.env.PORT || 3001;
const path = require("path");

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//Connect to SQL
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
