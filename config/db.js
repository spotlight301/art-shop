const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASEURL)
.then(()=>{
  const db = mongoose.connection;
  console.log(`mongoDB is connected to database: ${db.name} , at host: ${db.host} and on port ${db.port}`);
})
.catch((error)=>{
console.log("there is an error in connecting with mongoDB , " + error);
})