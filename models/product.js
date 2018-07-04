const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');

const ProductSchema = mongoose.Schema({
    price: {
        type: Number
    },
    qty: {
        type: Number
    },
    desc: {
        type: String
    },
    img: {
        type: String
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.getAllProducts = function (callback) {
    Product.find({}, callback);
}

module.exports.addProduct = (newProduct, callback) => {
    newProduct.save(callback);
};

module.exports.getProductByProdId = function (prodId, callback) {
    Product.findById(prodId, callback);
}

module.exports.deductQty = (userId, callback) => {
    const query = { userId: userId };
    Product.aggregate([{ $project: { query, qty: { $subtract: ["$qty", 1] } } }], callback);
};

module.exports.minusBought = (prodId, updatedQty, callback) => {
    Product.findByIdAndUpdate(prodId, { $set: { qty: updatedQty } }, { new: true, upsert: true }, callback);
};

module.exports.deleteProduct = (product, callback) => {
    Product.remove(product, callback);
}