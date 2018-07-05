const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid/v4');

const UserSchema = mongoose.Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
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

module.exports.getUsers = async () => {
    return await User.find({}).exec();
}

module.exports.getUserById = async (id) => {
    return await User.findById(id).exec();
}

module.exports.getUserByEmail = async (email) => {
    const query = { email: email };
    return await User.findOne(query).exec();
}

module.exports.addUser = (newUser) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) reject(error)
                newUser.password = hash;
                resolve(newUser.save());
            });
        });
    });
}

module.exports.comparePassword = async (userPassword, hash) => {
    return await bcrypt.compare(userPassword, hash);
}