const express = require('express');
const router = express.Router();

const Accounts = require('../models/account');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');

router.post('/account', (req, res, next) => {
    const userId = req.body.userId;

    Accounts.getAccountByUserId(userId, (error, data) => {
        if (error) {
            res.json({ success: false, msg: 'Failed to get account' });
        } else {
            res.json({ success: true, account: data });
        }
    });
});

router.post('/loadAccount', (req, res, next) => {
    let loadAcoount = req.body;

    console.log("account data", loadAcoount);
    Accounts.loadAccount(loadAcoount.userId, loadAcoount.balance, (error, data) => {
        if (error) {
            res.json({ success: false, msg: error });
        } else {
            res.json({ success: true, account: data });
        }
    });
});

module.exports = router;