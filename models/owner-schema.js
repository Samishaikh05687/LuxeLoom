const mongoose = require("mongoose")


const ownerSchema=mongoose.Schema({
    fullname: {
        typr:String,    
    },
    email: String,
    password:String,
    cart:{
        type:Array,
        default:[],
    },
    products:{
        type:Array,
        default:[],
    },
    gstin:String,
    picture:String
})

module.exports = mongoose.model("owner",ownerSchema);
