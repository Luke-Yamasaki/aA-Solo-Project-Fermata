const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Track } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

const router = express.Router();

const validateMusic = [
    check('music')
      .exists({ checkFalsy: true })
      .custom((value, { req }) => {
        const types = '^.*\.(?!wav$|mp3$)[^.]+$';
        const file = req.file;
        if (types.test(file.type.toString()) || types.test(file.name)) {
            alert("file is valid");
        } else{
            alert("file is invalid");
        }
        })
      .withMessage('Only MP3 or WAV files are supported.'),
    handleValidationErrors
];

const validateImage = [
  check('image')
    .exists({ checkFalsy: true })
    .custom((value, { req }) => {
      const types = '^.*\.(?!jpg$|png$)[^.]+$';
      const image = req.image;
      if (types.test(image.type.toString()) || types.test(image.name)) {
          alert("image is valid");
      } else{
          alert("imge is invalid");
      }
      })
    .withMessage('Only JPG or PNG files are supported.'),
  handleValidationErrors
];

router.post(
  "/",
  validateMusic,
  validateImage,
  singleMulterUpload("music"),
  asyncHandler(async (req, res) => {
    console.log(req)
    const user_Id = req.params.id;
    const { title, image, description } = req.body;

    const url = await singlePublicFileUpload(req.file);
    // const urls = await multiplePublicFileUpload(req.files);
    console.log('................', url)
    const track = await Track.create({
      title,
      user_Id,
      image,
      url,
      description
    });

    setTokenCookie(res, track);

    return res.json({
      track,
    });
  })
);

router.put(
  "/:id",
  singleMulterUpload("music"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const url = await singlePublicFileUpload(req.file);
    await Track.update({ url }, { where: { id } });

    res.json({ url });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tracks = await Track.findAll();

    res.json(tracks);
  })
);

module.exports = router;
