const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const uuidv4 = require('uuid/v4');

router.get('/getAllProducts', async (req, res, next) => {
    try {
        const products = await Product.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        next(res.status(500).json(products));
    }
});

router.post('/addProduct', async (req, res, next) => {
    let newProduct = new Product({
        prodId: uuidv4(),
        desc: req.body.desc,
        price: req.body.price,
        qty: req.body.qty,
        img: req.body.img
    });

    try {
        let product = await Product.addProduct(newProduct);
        res.status(200).json(product);
    } catch (error) {
        next(res.status(500).json(error));
    }
});

router.get("/product/:id", async (req, res, next) => {
    try {
        let product = await Product.getProductByProdId(getParamId(req));
        res.status(200).json(product);
    } catch (error) {
        next(res.status(500).json(error));
    }
});

router.delete("/product/:id", async (req, res, next) => {
    try {
        let product = await Product.deleteProductById(getParamId(req));
        res.status(500).json(product);
    } catch (error) {
        next(res.status(500).json(error));
    }
});

function getParamId(req) {
    return req.params.id;
}

module.exports = router;