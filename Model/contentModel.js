const mongoose= require("mongoose")

const contentModel = mongoose.Schema({
    title:{
        
            type:String,
            required:true
        },
    description:{
            type:String,
            required:true
        },
    specialIngridients:{
            type:String,
            required:true
        },
    price:{
            type:Number,
            required:true

        },
     image:{
            type:String,
            required:true
        },
    imageID:{
            type:String,
            required:true
        }
    
}, {timestamps:true})

module.exports=mongoose.model("content", contentModel)