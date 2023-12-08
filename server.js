
const express= require('express');
//initialize express 
const app = express();

//ask nodejs to look into views folder for the file named layout.ejs
const expressLayouts =require('express-ejs-layouts');

//require and initialize dotenv
require('dotenv').config();

//get port number from env
const port= process.env.PORT;

//database configuration and connection
const db= require("./config/db");

//asks nodejs to look for all the static files in public folder (CSS, JS, Audio, Videos, Images)
app.use(express.static("public"));


app.set("view engine", "ejs");
app.use(expressLayouts);

//Import routes
const indexRouter = require('./routes/index');


//mount routes
app.use("/" , indexRouter);

app.listen(port , ()=> {
  console.log(`the application is working on port ${port}`);
})