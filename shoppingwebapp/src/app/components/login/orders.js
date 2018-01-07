const express = require('express');
const router = express.Router();

const Order = require('../models/order');
const Product = require('../models/product');
const Account = require('../models/account');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');

router.post('/addOrder', (req, res, next) => {
    let newOrder = new Order({
        userId: req.body.userId,
        prodId: req.body.prodId,
        qtyBought: req.body.qtyBought
    });
    let userId = req.body.userId;
    let prodId = req.body.prodId;

    Order.addOrder(newOrder, (error, result) => {
        if (error) {
            res.status(500);
            res.json({ success: false, msg: 'Failed to make order' });
        } else {
            Product.deductQty(userId, (error, data) => {
                if (error) {
                    res.status(500);
                    res.json({ success: false, msg: "Failed to deduct quantity" });
                } else {
                    Product.minusBought(prodId, data[0].qty, (error, result) => {
                        if (error) {
                            res.status(500);
                            res.json({ success: false, msg: error.errmsg });
                        } else {
                            Account.minusAmount(userId, result.price, (error, data) => {
                                if (error) {
                                    res.status(500);
                                    res.json({ success: false, msg: "Failed to deduct amount" });
                                } else {
                                    Account.loadAccount(userId, data[0].balance, (error, data) => {
                                        console.log(data);
                                        if (error) {
                                            res.status(500);
                                            res.json({ success: false, msg: "Failed to top up" });
                                        } else {
                                            res.status(200);
                                            res.json({ success: true, product: result });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    })
});

router.get("/order/user/:id", (req, res) => {

    Order.getOrderByUserId(getParamId(req), (err, order) => {
        if (err) {
            res.status(500);
            res.json({ success: false, msg: err.errmsg });
        } else {
            res.status(200);
            res.json({ success: true, order: order });
        }
    });
});

router.get("/order/product/:id", (req, res) => {

    Order.getOrderByProdId(getParamId(req), (err, order) => {
        if (err) {
            res.status(500);
            res.json({ success: false, msg: err.errmsg });
        } else {
            res.status(200);
            res.json({ success: true, order: order });
        }
    });
});

router.get("/order/orders", (req, res) => {

    Order.getOrders((err, order) => {
        if (err) {
            res.status(500);
            res.json({ success: false, msg: err.errmsg });
        } else {
            res.status(200);
            res.json({ success: true, order: order });
        }
    });
});

function getParamId(req) {
    return req.params.id;
}
module.exports = router;