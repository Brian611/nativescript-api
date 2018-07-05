const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    prodId: {
        type: String,
        unique: true
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
    const query = { prodId: prodId };
    return await Product.findOne(query).exec();
}

module.exports.deductQty = async (prodId) => {
    const query = { prodId: prodId };
    return await Product.aggregate([{ $project: { query, qty: { $subtract: ["$qty", 1] } } }]).exec();
};

module.exports.minusBought = async (prodId, updatedQty) => {
    const query = { prodId: prodId };
    return await Product.findOneAndUpdate(query, { $set: { qty: updatedQty } }, { new: true, upsert: true }).exec();
};

module.exports.deleteProductById = async (prodId) => {
    const query = { prodId: prodId };
    return await Product.findOneAndRemove(query).exec();
}