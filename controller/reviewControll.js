const reviewModel = require("../Model/reviewModel")


const creating = async(req, res)=>{
   try {
        const created = await reviewModel.create(req.body)
        res.status(201).json({
            status:"successful",
            data:created
        })
   } catch (error) {
       console.log(error.mesage)
   }

    
}

const getall = async(req, res)=>{
  try {
        const get = await reviewModel.find()
        res.status(201).json({
            status:"successful",
            data:get
        })
  } catch (error) {
      console.log(error.message)
  }

}

module.exports={
    creating,
    getall
}