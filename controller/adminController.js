const adminModel = require("../Model/adminModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const creating = async(req, res)=>{
    try {

        const {email, username, password, position}= req.body
   const salted = await bcrypt.genSalt(10)
   const hashing = await bcrypt.hash(password, salted) 

   const  createuser = await adminModel.create({
       email,
       username, 
       position,
       admin:true, 
       password:hashing 
        
   })

   res.status(201).json({
       status:"success",
       data:createuser
   })
    
    } catch (error) {
        console.log(error.message)
    }
}

const getting = async(req, res)=>{
    try {
 const get = await adminModel.find()
       

   res.status(201).json({
       status:"success",
       data:get
   })
    
    } catch (error) {
        console.log(error.message)
    }
}
const patching = async(req, res)=>{
    try {

        const {username, position}= req.body
   

   const  patchuser = await adminModel.findByIdAndUpdate(req.params.id,{
      
       username, 
       position,
       admin:true,
      
       
   }, {new:true})

   res.status(201).json({
       status:"success",
       data:patchuser
   })
    
    } catch (error) {
        console.log(error.message)
    }
}

const removing = async(req, res)=>{
   try {
    const deleted = await adminModel.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status:"success",
        
    })
    
   } catch (error) {
       console.log(error.message)
   }
}
const signin = async(req, res)=>{
   try {
      const {email, password} = req.body
      
      const finduser = await adminModel.findOne({email})
      if(finduser){
          const check = await bcrypt.compare(password, finduser.password)

          if(check){
          const token = jwt.sign({
              _id:finduser._id,
              email:finduser.email,
             position: finduser.position,
              username:finduser.username,
              admin:finduser.admin,

          }, "destinystomachcarepass",
          {expiresIn :"7d"})  
          
          const {password, ...info} = finduser._doc


          res.status(200).json({
              success :"success",
              data:{token, ...info}
          })
          }
         

      }else{
          res.status(500).json({
              status:"cannot find user"
          })
      }
   } catch (error) {
       console.log(error.message)
   } 
}
module.exports={
    creating, getting,
    patching,
    removing ,
    signin
} 