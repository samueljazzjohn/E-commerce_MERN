const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName : {type:String,required:true},
    companyPlace : {type:String,required:true},
    companyPhone:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'userModel'}
},{collection:'company'});


module.exports = mongoose.model('companyModel',companySchema)