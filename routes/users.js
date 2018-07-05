const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');
const uuidv4 = require('uuid/v4');

router.post('/register', async (req, res, next) => {

    let newUser = new User({
        userId: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const user = await User.addUser(newUser);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
})

router.post('/authenticate', async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        let user = await User.getUserByEmail(email);
        if (!user) next(res.status(404).json({ success: false, msg: "User not found" }));

        let isMatch = await User.comparePassword(password, user.password);
        if (isMatch) {
            const token = jwt.sign(user.toJSON(), configuration.secret, {
                expiresIn: 86400 // 1 day
            })
            res.status(200).json({
                success: true,
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        } else {
            next(res.status(500).json({
                success: true,
                msg: "Invalid credentials"
            }));
        }
    } catch (error) {
        next(error);
    }
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    res.status(200).json({ user: req.user });
});
module.exports = router;