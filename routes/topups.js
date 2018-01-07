const express = require('express');
const router = express.Router();

const TopUps = require('../models/topup');
const Account = require('../models/account');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');

router.post('/topup', (req, res, next) => {
    let newTopUp = new TopUps({
        userId: req.body.userId,
        amount: req.body.amount
    });
    let updatedBalance = req.body;
    let caughtError = {};

    TopUps.addTopUp(newTopUp, (error, result) => {
        if (error) {
            res.status(500);
            res.json({ success: false, msg: 'Failed to top up' });
        } else {
            Account.addAmount(updatedBalance.userId, updatedBalance.amount, (error, data) => {
                if (error) {
                    res.status(500);
                    res.json({ success: false, msg: "Failed to add amount" });
                } else {
                    Account.loadAccount(updatedBalance.userId, data[0].balance, (error, data) => {
                        console.log(data);
                        if (error) {
                            res.status(500);
                            res.json({ success: false, msg: "Failed to top up" });
                        } else {
                            res.status(200);
                            res.json({ success: true, msg: "top up was successful" });
                        }
                    });
                }
            });
        }
    });
});

router.get("/topup/:id", (req, res) => {

    TopUps.getTopUpByUserId(getParamId(req), (err, topups) => {
        if (err) {
            res.status(500);
            res.json({ success: false, msg: err.errmsg });
        } else {

            res.status(200);
            res.json({ success: true, topups: topups });
        }
    });
});

function getParamId(req) {
    return req.params.id;
}

module.exports = router;