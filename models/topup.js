const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');

const TopUpSchema = mongoose.Schema({
    amount: {
        type: Number
    },
    createdAt: { type: Date, default: new Date() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const TopUp = module.exports = mongoose.model('TopUp', TopUpSchema);

module.exports.getTopUpById = function (id, callback) {
    TopUp.findById(id, callback);
}

module.exports.getTopUpByUserId = function (userId, callback) {
    const query = { userId: userId };
    TopUp.find(query, callback);
}

module.exports.addTopUp = function (newTopUp, callback) {
    newTopUp.save(callback);
}