const express = require('express');
const router = express.Router();

const Product = require('../models/product');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');

router.get('/getAllProducts', (req, res, next) => {
    Product.getAllProducts((error, products) => {
        if (error) {
            res.status(500);
            res.json({ success: false, msg: 'Failed to get products' });
        } else {
            res.status(200);
            res.json(products);
        }
    });
});

router.post('/addProduct', (req, res, next) => {
    let newProduct = new Product({
        desc: req.body.desc,
        price: req.body.price,
        qty: req.body.qty,
        img: req.body.img
    });

    Product.addProduct(newProduct, (error, result) => {
        if (error) {
            res.status(500);
            res.json({ success: false, msg: 'Failed to add product' });
        } else {
            res.status(200);
            res.json(result);
        }
    })
});

router.get("/product/:id", (req, res) => {

    Product.getProductByProdId(getParamId(req), (err, product) => {
        if (err) {
            res.status(500);
            res.json({ success: false, msg: err.message });
        } else {
            res.status(200);
            res.json(product);
        }
    });
});

router.delete("/product/:id", (req, res) => {
    Product.deleteProductById(getParamId(req), (err, product) => {
        if (err) {
            res.status(500).json({ success: false, msg: err.message });
        } else {
            res.status(500).json(product)
        }
    })
})

function getParamId(req) {
    return req.params.id;
}
module.exports = router;