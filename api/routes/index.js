var express = require('express');
const { default: mongoose } = require('mongoose');
const companyModel = require('../models/companyModel');
const customerModel = require('../models/customerModel');
const userModel = require('../models/userModel');
var router = express.Router();
var passport = require('passport')

// app.get('/auth/google',
//   passport.authenticate('google', { 
//     successRedirect : process.env.CLIENT_URL,
//     failureRedirect : "/login/failed"
//   }));

// app.get('/google',passport.authenticate("google",["profile","email"]))

// app.get('/logout',(req,res)=>{
//   req.logout()
//   req.redirect(process.env.CLIENT_URL)
// })

// app.get('/login/failed',(req,res,next)=>{
//   return res.status(400).json({"message":"error"})
// })

// app.get('/login/success',(req,res,next)=>{
//   if(req.user){
//     return res.status(200).json(req.user)
//   }else{
//     return res.status(403).json({"message":"error"})
//   }
// })

// Endpoint to login
router.get('/login', function (req, res, next) {
  console.log(req.query)
  userModel.findOne({ email: req.query.email }).then((doc) => {
    // console.log(doc)
    if (!doc) return res.status(400).json({ "error": err })
    if (doc.type == 'customer') {
      customerModel.findOne({ user: doc._id }).then((customer) => {
        console.log(customer)
        let data ={
          userId:doc._id,
          email:doc.email,
          type:doc.type,
          name:customer.customerName,
          phone:customer.customerPhone,
          place:customer.customerPlace,
          id:customer._id
        }
        req.session.user=data
        console.log("session"+JSON.stringify(req.session.user))
        // console.log(data)
        return res.status(200).json(data)
      }).catch((err) => {
        console.log(err)
        return res.status(400).json({ "error": err })
      })
    } else {
      companyModel.findOne({ user: doc._id }).then((company) => {
        console.log(company)
        let data ={
          userId:doc._id,
          email:doc.email,
          type:doc.type,
          name:company.companyName,
          phone:company.companyPhone,
          place:company.companyPlace,
          id:company._id
        }
        req.session.user=data
        console.log("session"+JSON.stringify(req.session.user))
        return res.status(200).json(data)
      }).catch((err) => {
        return res.status(400).json({ "error": err })
      })
    }
  }).catch((err) => {
    return res.status(400).json({ "error": err })
  })
});


// Endpoint for logout
router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json({"message":"success"})
    }
  });
});

// Endpoint to register
router.post('/register', function (req, res, next) {
  console.log(req.body)
  const user = new userModel({
    email: req.body.email,
    password: req.body.password,
    type: req.body.type
  })
  user.save().then((user) => {
    console.log(user)
    if (req.body.type === 'customer') {
      const customer = new customerModel({
        customerName: req.body.name,
        customerPhone: req.body.phone,
        customerPlace: req.body.place,
        user: user._id
      })

      customer.save().then((cdata) => {
        console.log(cdata)
        return res.status(200).json({ "message": "Success" })
      }).catch((err) => {
        return res.status(400).json(err)
      })

    } else {
      const company = new companyModel({
        companyName: req.body.name,
        companyPhone: req.body.phone,
        companyPlace: req.body.place,
        user: user._id
      })

      company.save().then((cdata) => {
        console.log(cdata)
        return res.status(200).json({ "message": "Success" })
      }).catch((err) => {
        console.log(err)
        return res.status(400).json(err)
      })

    }
  }).catch((err) => {
    return res.status(400).json(err)
  })
});


module.exports = router;
