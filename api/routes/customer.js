var express = require('express');
const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');
var router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello Express');
});


// Endpoint to add cart
router.post('/add-item', (req, res, next) => {
    console.log(req.body)
    const cart = new cartModel({
        product: req.body.product,
        user: req.body.user
    })

    cart.save().then((doc) => {
        return res.status(200).json(doc)
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({ "message": err })
    })
})

// Endpoint to get cartitems
router.get('/get-cart', (req, res, next) => {
    cartModel.find({ user: req.query.user_id }).then((doc) => {
        return res.status(200).json({ "count": doc.length })
    }).catch((err) => {
        return res.status(400).json({ "message": err })
    })
})

// Endpoint to get all cart product
router.get('/cart-items', (req, res, next) => {
    let data = JSON.stringify(req.query)
    let id = JSON.parse(data).user_id
    // console.log("cart-items-------"+ id)
    cartModel.find({ user: id }).then((doc) => {
        console.log(doc)
        if(doc.length<=0) return res.status(401).json({"message":"no data"})
        return res.status(200).json(doc)
    }).catch((err) => {
        console.log(err)
        return res.status(400).json(err)
    })

})


// Endpoint to delete cart
router.delete('/delete-cart', (req, res, next) => {
    let data = JSON.stringify(req.body)
    let id = JSON.parse(data).id
    cartModel.deleteOne({_id:id}).then((doc) => {
        if (doc.acknowledged && doc.deletedCount == 1){
            return res.status(200).json({ "message": "success" })
        }
        return res.status(400).json({ "message": "nothing deleted" })
    }).catch((err) => {
        return res.status(400).json({ "message": err })
    })
})

module.exports = router;
