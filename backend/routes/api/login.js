const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
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
