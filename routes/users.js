const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const configuration = require('../configuration/database');
const uuidv4 = require('uuid/v4');
const CustomErrors = require('../utils/custom-errors');
const isEmpty = require('lodash/isEmpty');
const has = require('lodash/has');
const validator = require('body-validator');

router.post('/register', async (req, res, next) => {
    const data = {
        userId: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    let validationSchema = [
        { name: "userId", type: String, required: true },
        { name: "name", minlength: 3, maxlength: 24, required: true },
        { name: "email", stringType: validator.FieldType.Email, required: true },
        { name: "password", minlength: 6, required: true }
    ];

    try {
        let validation = new validator.DataValidator(validationSchema, data)
        validation.Validate();
        const result = validation.ValidationResult;
        if (result.errors) throw new CustomErrors(result, 400);

        let newUser = new User(data);
        const user = await User.addUser(newUser);
        if (isEmpty(user)) {
            throw new CustomErrors("An error occured registering user", 400);
        } else if (has(user.errors)) {
            throw new CustomErrors("Error: unable to add user", 500);
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        next(res.status(error.code).json(error));
    }
})

router.post('/authenticate', async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = await User.getUserByEmail(email);
        if (isEmpty(user)) throw new CustomErrors("User not found", 404);

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
            throw new CustomErrors("Invalid credentials", 400);
        }
    } catch (error) {
        next(res.status(error.code).json(error));
    }
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    res.status(200).json({ user: req.user });
});
module.exports = router;