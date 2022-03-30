const couponModel = require("../model/couponModel");

const verifyCoupon = async function(req,res){
    try{
        let code=req.body.code
        const Coupon=await couponModel.findOne(code)
        if (Coupon) {
            if (new Date().getTime() > Coupon.startDate.getTime() && new Date().getTime() < Coupon.endDate.getTime()) {
                if (req.body.total >= Coupon.Amount) {
                    let discount;
                    if (Coupon.type === 'percentage') {
                        discount = (req.body.total * Coupon.value)/100
                    } else {
                        discount = Coupon.value
                    }
    
                    return {
                        inRange: true,
                        discount,
                        finalAmount: req.body.total - discount
                    }
                } else {
                    return {
                        inRange: false,
                        message: `Need to add more items worth ${Coupon.thresholdAmount - req.body.total} to the list for this coupon to be enabled.`
                    }
                }
            } else {
                return {
                    inRange: false,
                    message: 'Coupon expired! Try another coupon.'
                }
            }
        } else {
            return {
                inRange: false,
                message: 'Coupon invalid!please use a valid Coupon.'
            }
        }
    
    }
    catch (error) {
        console.log({ ErrorIs: error.message })
        res.status(500).send({ status: false, Errormsg: error.message })
    }
}
    
module.exports = verifyCoupon

    