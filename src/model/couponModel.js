const mongoose = require('mongoose')
const schema = mongoose.Schema

const couponsSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    Amount: Number,
    type: String,
    value: Number,
    code: String
})
module.exports = mongoose.model('coupon', couponsSchema)

