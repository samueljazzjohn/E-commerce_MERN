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
    console.log(req.query)
    cartModel.find({ user: req.query.user_id }).then((doc) => {
        console.log(doc)
        return res.status(200).json({ "count": doc.length })
    }).catch((err) => {
        return res.status(400).json({ "message": err })
    })
})

// Endpoint to get all cart product
router.get('/cart-items', (req, res, next) => {
    console.log(req.query)
    let result = []
    cartModel.find({ user: req.query.user_id }).then((doc) => {
        console.log(doc)
        doc.forEach(Element => {
            productModel.findOne({ id: Element.product }).then((product) => {
                result.push(product)
            }).catch((err) => {
                console.log(err)
                return res.status(400).json(err)

            })
        })
        console.log("result ____"+result)
        return res.status(200).json(result)
    }).catch((err) => {
        console.log(err)
        return res.status(400).json(err)
    })

})

module.exports = router;
