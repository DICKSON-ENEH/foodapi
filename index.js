require("dotenv").config()
const express = require("express")
const cors = require("cors")

const port = 2500
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://foodapp:today@cluster0.xd5wm.mongodb.net/foodapp?").then(()=>{ 
    app.listen(port, ()=>{
        console.log("connected and listening to port" , port )
    })
})
const app = express()

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api", require("./Router/reviewRoute"))
app.use("/api", require("./Router/adminRoute"))
app.use("/api", require("./controller/contentController"))
