var express = require('express');
const companyModel = require('../models/companyModel');
var router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

// endpoint to get perticular company details
router.get('/get-details', function(req, res, next) {
  console.log(req.query)
  companyModel.findOne({_id:req.query.id}).then((doc)=>{
    console.log(doc)
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
});

module.exports = router;
