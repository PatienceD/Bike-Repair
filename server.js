const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();
var mysql = require("mysql");
<<<<<<< HEAD
var connection;
const PORT = process.env.PORT || 3306;
=======
const PORT = process.env.PORT || 8080;
>>>>>>> 86d3dd77414b672f713cb7e5a65dc8739e63ce0c

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(routes);

//Connect to SQL
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
