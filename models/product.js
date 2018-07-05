const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');
const uuidv4 = require('uuid/v4');

const ProductSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: uuidv4()
    },
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
    const query = { id: prodId };
    Product.findOne(query, callback);
}

module.exports.deductQty = (prodId, callback) => {
    const query = { id: prodId };
    Product.aggregate([{ $project: { query, qty: { $subtract: ["$qty", 1] } } }], callback);
};

module.exports.minusBought = (prodId, updatedQty, callback) => {
    const query = { id: prodId };
    Product.findOneAndUpdate(query, { $set: { qty: updatedQty } }, { new: true, upsert: true }, callback);
};

module.exports.deleteProductById = (prodId, callback) => {
    const query = { id: prodId };
    Product.findByIdAndRemove(query, callback);
}