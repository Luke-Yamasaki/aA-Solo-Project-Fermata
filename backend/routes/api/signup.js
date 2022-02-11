const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.')
      .custom((value, { req }) => {
        return new Promise((resolve, reject) => {
          User.findOne({ where: { email: req.body.email } })
            .then((res) => {
              if (res) {
                reject("Email already taken");
              } else {
                resolve();
              }
            })
            .catch((err) => {
              reject("Database error: ", err.message);
            });
        });
      }),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.')
      .custom((value, { req }) => {
        return new Promise((resolve, reject) => {
          User.findOne({ where: { username: req.body.username } })
            .then((res) => {
              if (res) {
                reject("Username already taken");
              } else {
                resolve();
              }
            })
            .catch((err) => {
              reject("Database error: ", err.message);
            });
        });
      }),
    check('username').not().isEmail().withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({
      username,
      email,
      password
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get('/demo', asyncHandler(async (req, res) => {
    const username = "Demo-lition"
    const emailAddress = "demo@user.io"
    const password = "password"
    const demoUser = await User.findOne({ where: { emailAddress } })

    if (demoUser === null) {
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.signup({
            username, emailAddress, hashedPassword
        })

        const newUser = await User.findOne({ where: { emailAddress } })

        req.session.user = newUser;
        req.session.auth = {
            user_Id: newUser.id,
        };
        return req.session.save(() => res.redirect('/'))
    } else {
        req.session.auth = {
            user_Id: demoUser.id,
        };
        req.session.save(() => res.redirect('/'));
    }
}));

module.exports = router;
