const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports= mongoose.model("reviews", reviewSchema)