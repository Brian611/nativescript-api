const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');

const OrderSchema = mongoose.Schema({
    qtyOrdered: {
        type: Number
    },
    createdAt: { type: Date, default: new Date() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    prodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOrders = function (callback) {
    const query = {};
    Order.findOne(query, callback);
}

module.exports.getOrderByUserId = function (userId, callback) {
    const query = { userId: userId };
    Order.findOne(query, callback);
}

module.exports.getOrderByProdId = function (prodId, callback) {
    const query = { prodId: prodId };
    Order.findOne(query, callback);
}

module.exports.addOrder = (newOrder, callback) => {
    newOrder.save(callback);
};