const mongoose = require('mongoose')
const schema = mongoose.Schema

const itemsSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number
})
module.exports = mongoose.model("items", itemsSchema)

