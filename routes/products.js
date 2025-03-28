const express = require('express');
const router = express.Router();


const productController = require("../Controllers/Product.controller")
router.post("/create" , productController.create)
router.get("/view" , productController.view)

module.exports = router