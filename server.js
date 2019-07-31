const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();
var mysql = require("mysql");
var connection;
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: null,
  database:'bike-repair'
});

};
// Add routes, both API and view
app.use(routes);

//Connect to SQL
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
