const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    position:{
        type:String
    },
    admin:{
        type:Boolean
    }
}, {timestamps:true})

module.exports= mongoose.model("admin", adminSchema)