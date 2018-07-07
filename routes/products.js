const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const uuidv4 = require('uuid/v4');
const CustomErrors = require('../utils/custom-errors');
const isEmpty = require('lodash/isEmpty');
const has = require('lodash/has');
const validator = require('body-validator');

router.get('/getAllProducts', async (req, res, next) => {
    try {
        const products = await Product.getAllProducts();
        console.dir(products);
        if (isEmpty(products)) {
            throw new CustomErrors("Products not available", 404);
        } else if (has(products.errors)) {
            throw new CustomErrors("An Error occured fetching products", 500);
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        next(res.status(error.code).json(error));
    }
});

router.post('/addProduct', async (req, res, next) => {
    const data = {
        prodId: uuidv4(),
        desc: req.body.desc,
        price: req.body.price,
        qty: req.body.qty,
        img: req.body.img
    }
    let validationSchema = [
        { name: "prodId", type: String, required: true },
        { name: "desc", minlength: 3, maxlength: 24, required: true },
        { name: "price", type: Number, required: true },
        { name: "qty", type: Number, required: true },
        { name: "img", minlength: 4 },
    ];
    try {
        let validation = new validator.DataValidator(validationSchema, data)
        validation.Validate();
        const result = validation.ValidationResult;
        if (result.errors) throw new CustomErrors(result, 400);

        let newProduct = new Product(data);
        let product = await Product.addProduct(newProduct);
        if (isEmpty(product)) {
            throw new CustomErrors("Problem adding product", 500);
        } else if (has(product.errors)) {
            throw new CustomErrors("An Error occured adding product", 400)
        }
        res.status(200).json(product);
    } catch (error) {
        next(res.status(error.code).json(error));
    }
});

router.get("/product/:id", async (req, res, next) => {
    try {
        let product = await Product.getProductByProdId(getParamId(req));
        if (isEmpty(product)) {
            throw new CustomErrors("Product not found", 404);
        } else if (has(product.errors)) {
            throw new CustomErrors("An Error occured fetching product", 500);
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        next(res.status(error.code).json(error));
    }
});

router.delete("/product/:id", async (req, res, next) => {
    try {
        let product = await Product.deleteProductById(getParamId(req));
        if (isEmpty(product)) {
            throw new CustomErrors("Product not found", 404);
        } else if (has(product.errors)) {
            throw new CustomErrors("An Error occured deleting product", 500);
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        next(res.status(error.code).json(error));
    }
});

function getParamId(req) {
    return req.params.id;
}

module.exports = router;