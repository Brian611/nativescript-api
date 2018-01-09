const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');

const AccountSchema = mongoose.Schema({
    balance: {
        type: Number
    },
    desc: {
        type: String
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);

module.exports.createAccount = (newAcount, callback) => {
    newAcount.save(callback);
};

module.exports.getAccountByUserId = function (userId, callback) {
    const query = { userId: userId };
    Account.findOne(query, callback);
}

module.exports.loadAccount = (userId, amount, callback) => {
    const query = { userId: userId };
    Account.findOneAndUpdate(query, { $set: { balance: amount } }, { new: true, upsert: true }, callback);
};

module.exports.addAmount = (userId, balance, callback) => {
    const query = { userId: userId };
    console.log("add balance: ", balance);
    Account.aggregate([{ $project: { query, balance: { $add: ["$balance", balance] } } }], callback);
};

module.exports.minusAmount = (userId, balance, callback) => {
    const query = { userId: userId };
    console.log("minus balance: ", balance);
    Account.aggregate([{ $project: { query, balance: { $subtract: ["$balance", balance] } } }], callback);
};