const express = require('express');
const router = express.Router();

const controllers=require('../controller/addCoupon')


router.post('/createNewCoupon', controllers.createNewCoupon)

module.exports=router;