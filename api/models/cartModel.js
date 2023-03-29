const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    product: {type:mongoose.Schema.Types.ObjectId,ref:'productModel'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'userModel'}
},{collection:'cart'});


module.exports = mongoose.model('cartModel',cartSchema)