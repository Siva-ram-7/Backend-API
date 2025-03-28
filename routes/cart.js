const express = require('express')
const router = express.Router()


const cartController = require("../Controllers/Cart.controller")
router.post("/create" , cartController.create)
router.get("/view" , cartController.view)

module.exports = router

