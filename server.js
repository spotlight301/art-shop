
const express= require('express');
//initialize express 
const app = express();

// Load express-session
const session = require('express-session');

// Require passport
const passport = require('passport');

//ask nodejs to look into views folder for the file named layout.ejs
const expressLayouts =require('express-ejs-layouts');

//require and initialize dotenv
require('dotenv').config();

//get port number from env
const port= process.env.PORT;

// Require passport
require('./config/passport')

//database configuration and connection
const db= require("./config/db");

//asks nodejs to look for all the static files in public folder (CSS, JS, Audio, Videos, Images)
app.use(express.static("public"));
//for form process
app.use(express.urlencoded({extended: true}));

// Configure session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Mount passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.set("view engine", "ejs");
app.use(expressLayouts);

//Import routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user')

//mount routes
app.use("/" , indexRouter);
app.use("/user" , userRouter);

app.listen(port , ()=> {
  console.log(`the application is working on port ${port}`);
})