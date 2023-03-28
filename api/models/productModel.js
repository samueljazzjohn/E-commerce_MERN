const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    company:{type:mongoose.Schema.Types.ObjectId,ref:'ShopModel'},
    productName:{type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true},
    Image:{type:String},
},{collection:'products'}
)

module.exports = mongoose.model('ProductModel',ProductSchema)