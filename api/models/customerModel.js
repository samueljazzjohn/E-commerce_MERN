const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerName : {type:String,required:true},
    customerPlace : {type:String,required:true},
    customerPhone:{type:String,required:true}
},{ timestamps: true },{collection:'customer'});


module.exports = mongoose.model('customerModel',customerSchema)