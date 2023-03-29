var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const multer = require('multer');
const productModel = require('../models/productModel');

// Create Multer storage object
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

// Create Multer middleware function
const upload = multer({ storage: storage });


// Enpoint for storing product
router.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.log(req.session)

  // let user = JSON.stringify(req.session.user)
  // console.log(user)

  const product = new productModel({
    company:req.body.company,
    productName:req.body.product,
    quantity:req.body.quantity,
    price:req.body.price,
    Image:req.file.filename,
  })

  product.save().then((doc)=>{
    console.log(doc)
    return res.status(200).json({"message":"success"})
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"error":err})
  })
  // process the image and other data
  // res.send('File uploaded successfully');
});

// Endpoint to get all products of specific user
router.get('/get-products',(req,res,next)=>{
  console.log(req.query)
  productModel.find({company:req.query.id}).then((doc)=>{
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
})

// Endpoint to get 10 classified products 
router.get('/get-classifieds',(req,res,next)=>{
  console.log(req.query)
  productModel.find({}).limit(10).then((doc)=>{
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
})

// Endpoint to get 8 deal products 
router.get('/get-deals',(req,res,next)=>{
  console.log(req.query)
  productModel.find({}).limit(8).then((doc)=>{
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
})

// Endpoint to get all the products 
router.get('/get',(req,res,next)=>{
  console.log(req.query)
  productModel.find({}).then((doc)=>{
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
})

// endpoint to update the quantity
router.put('/update-quantity',(req,res,next)=>{
  console.log(req.body)
  let newQuantity = req.body.quantity - 1
  console.log(newQuantity)
  productModel.updateOne({_id:req.body.id},{quantity:newQuantity}).then((doc)=>{
    return res.status(200).json(doc)
  }).catch((err)=>{
    console.log(err)
    return res.status(400).json({"message":"error"})
  })
})

module.exports = router;
