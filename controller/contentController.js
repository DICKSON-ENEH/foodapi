const express = require("express")
const router = express.Router()
// const cloudinary = require("../config/cloudinary")
const cloudinary = require("../config/cloudinary")
const upload = require ("../config/multer")
const verification = require("./authorize")
const contentModel = require("../Model/contentModel")
// const adminModel = require ("../controller/adminController")
router.post("/admin/create", verification, upload, async(req, res)=>{
    try {
        if(req.user.admin){
            const {title, description, specialIngridients, price}= req.body
            const cloudImage = await cloudinary.uploader.upload(req.file.path);
          //   const getAdmin = await adminModel.findById(req.params.id);
            const createContent = await contentModel.create({
                title, 
                description,
                specialIngridients, price,
                image:cloudImage.secure_url,
              price,
                imageID:cloudImage.public_id
            })
            res.status(201).json({
              status:"success",
              data:createContent
          })
        }else{
            res.status(400).json({
                message:"cannot carry this function "
            })
        }
  
       
    } catch (error) {
        console.log(error.message)
    }
})
router.get("/admin/getcontent", verification, upload, async(req, res)=>{
    try {
        
        const getUsers = await contentModel.find()

        res.status(200).json({
            status:"success",
            data:getUsers
        })
  
       
    } catch (error) {
        console.log(error.message)
    }
})
router.patch("/admin/getcontent/:id", verification, upload, async(req, res)=>{
    try {
        const cloudImage = await cloudinary.uploader.destroy(req.file.path);
        const getUsers = await contentModel.find(req.params.id, {
            title, 
            description,
            specialIngridients, price,
            image:cloudImage.secure_url,
          price,
            imageID:cloudImage.public_id


        }, {new:true})

        res.status(200).json({
            status:"success",
            data:getUsers
        })
  
       
    } catch (error) {
        console.log(error.message)
    }
})
router.delete("/admin/getcontent/:id", verification, upload, async(req, res)=>{
    try {
        const cloudImage = await cloudinary.uploader.destroy(req.file.path);
        const getUsers = await contentModel.findByIdAndDelete(req.params.id)
           

        res.status(200).json({
            status:"success",
            data:getUsers
        })
  
       
    } catch (error) {
        console.log(error.message)
    }
})

module.exports= router