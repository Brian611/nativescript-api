const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configuration = require('../configuration/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: new Date() }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUsers = function (id, callback) {
    User.find({}, callback);
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByEmail = function (email, callback) {
    const query = { email: email };
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function (userPassword, hash, callback) {
    bcrypt.compare(userPassword, hash, (error, isMatch) => {
        if (error) throw error;
        callback(null, isMatch);
    });
}