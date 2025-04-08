const express = require('express');
const router = express.Router();


const userController = require('../Controllers/User.contoller')


router.post('/create', userController.create)
router.get('/view', userController.view)
router.get('/view/:id', userController.viewOne)



module.exports = router