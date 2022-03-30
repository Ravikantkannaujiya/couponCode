const coupon = require('../model/couponModel')

const createNewCoupon = async function(req,res){
    try {
        const createCoupon=req.body
        const {startDate,endDate,Amount,type,value,code}=createCoupon

        let newCoupon= await couponModel.create(createCoupon);
         res.status(200).send({status:true, msg:'succes'})

        // const newCoupon = new coupon({
        //     startDate: req.body.start_date,
        //     endDate: req.body.end_date,
        //     Amount: req.body.minAmount,
        //     type: req.body.type,
        //     value: req.body.couponValue,
        //     code: req.body.code_string
        // })
    
        // return newCoupon.save()
    }
    catch (error) {
        console.log({ ErrorIs: error.message })
        res.status(500).send({ status: false, Errormsg: error.message })
    }
    
}

module.exports = createNewCoupon