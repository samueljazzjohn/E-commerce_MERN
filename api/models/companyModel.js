const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName : {type:String,required:true},
    place : {type:String,required:true},
    companyPhone:{type:String,required:true}
},{ timestamps: true },{collection:'company'});


module.exports = mongoose.model('companyModel',companySchema)