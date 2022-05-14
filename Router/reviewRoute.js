const express = require("express")
const router = express.Router()

const {creating, getall} = require("../controller/reviewControll")


router.post("/review/post", creating)
router.get("/review", getall)
module.exports = router