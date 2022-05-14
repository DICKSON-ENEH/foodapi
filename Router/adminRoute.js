const express = require("express")
const router = express.Router()

const {creating, getting, patching, removing, signin} = require("../controller/adminController")


router.post("/admin", creating)
router.post("/user/signin", signin)
router.get("/admin", getting)
router.patch("/admin/:id", patching)
router.delete("/admin/:id", removing)
module.exports = router 