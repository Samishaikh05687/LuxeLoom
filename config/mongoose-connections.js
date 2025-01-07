const mongoose  = require("mongoose");
const config = require("config");

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    console.log("connected to database")
})
.catch(function(){
    console.log("not connected to database")
})

module.exports= mongoose.connection;