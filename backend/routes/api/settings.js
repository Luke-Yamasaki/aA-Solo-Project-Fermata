const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");
const { types } = require('pg');

const router = express.Router();

const validateUsername = [
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
    handleValidationErrors
]

const validateEmail = [
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
    handleValidationErrors
];

const validatePassword = [
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
]

const validateImage = [
    check('image')
        .custom((value, { req }) => {
            types = '^.*\.(?!wav$|mp3$)[^.]+$';
            const file = req.body.image;
            if (types.test(file.type) || types.test(file.name)) {
                alert("file is valid");
            } else{
                alert("file is invalid");
            }
          })
          .withMessage('Only MP3 and WAV files are supported.'),
    handleValidationErrors
]

router.post(
  "/",
  singleMulterUpload("image"),
  validateImage,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.signup({
      username,
      email,
      password,
      profileImageUrl,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.put(
  "/:id",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    await User.update({ profileImageUrl }, { where: { id } });

    res.json({ profileImageUrl });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const user = await User.findAll();

    res.json(users);
  })
);

module.exports = router;
