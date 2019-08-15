const express = require("express");
const db = require("./models");
const routes = require("./controllers/bike-controller.js");
const app = express();
var mysql = require("mysql");
const PORT = process.env.PORT || 3001;
// var server = require('http').createServer(app);
// var passport = require('passport');
// var util = require( 'util' )
// var bodyParser = require( 'body-parser' )
// var cookieParser = require( 'cookie-parser' )
// var session = require( 'express-session' )
// var RedisStore = require( 'connect-redis' )( session )
// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


// API Access link for creating client ID and secret:
// https://code.google.com/apis/console/
// var GOOGLE_CLIENT_ID      = "687548733189-k5gcguor55l04qv13g0t7pmg6ncbdfcl.apps.googleusercontent.com"
// var GOOGLE_CLIENT_SECRET  = "ml6A6j_42UGpUjQK5Vphhj94";

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://example.com:3000/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
//       return done(null, profile);
//     });
//   }
// ));

// // configure Express
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use( express.static(__dirname + '/public'));
// app.use( cookieParser()); 
// app.use( bodyParser.json());
// app.use( bodyParser.urlencoded({
// 	extended: true
// }));
// app.use( session({ 
// 	secret: 'cookie_secret',
// 	name:   'kaas',
// 	store:  new RedisStore({
// 		host: '127.0.0.1',
// 		port: 6379
// 	}),
// 	proxy:  true,
//     resave: true,
//     saveUninitialized: true
// }));
// app.use( passport.initialize());
// app.use( passport.session());

// app.get('/', function(req, res){
//   res.render('index', { user: req.user });
// });

// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });

// app.get('/login', function(req, res){
//   res.render('login', { user: req.user });
// });

// app.get('/auth/google', passport.authenticate('google', { scope: [
//        'email', 'profile'] 
// }));

// app.get( '/auth/google/callback', 
//     	passport.authenticate( 'google', { 
//     		successRedirect: '/',
//     		failureRedirect: '/login'
// }));

// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// server.listen( 3002 );

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login');
// }



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
