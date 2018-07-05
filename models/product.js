const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const ProductSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: () => uuidv4()
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

module.exports.getAllProducts = async () => {
    return await Product.find({}).exec();
}

module.exports.addProduct = async (newProduct) => {
    return await newProduct.save();
};

module.exports.getProductByProdId = async (prodId) => {
    const query = { id: prodId };
    return await Product.findOne(query).exec();
}

module.exports.deductQty = async (prodId) => {
    const query = { id: prodId };
    return await Product.aggregate([{ $project: { query, qty: { $subtract: ["$qty", 1] } } }]).exec();
};

module.exports.minusBought = async (prodId, updatedQty) => {
    const query = { id: prodId };
    return await Product.findOneAndUpdate(query, { $set: { qty: updatedQty } }, { new: true, upsert: true }).exec();
};

module.exports.deleteProductById = async (prodId) => {
    const query = { id: prodId };
    return await Product.findOneAndRemove(query).exec();
}