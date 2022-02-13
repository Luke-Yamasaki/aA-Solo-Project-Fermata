const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Track, Genre } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");
const { Op } = require("sequelize");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const artists = await User.findAll({
        where: {
            trackCount: {
                [Op.gt]: 0
            }
        }
    })

    const tracks = await Track.findAll();
    const genres = await Genre.findAll();

    res.json(artists, tracks, genres);
  })
);

module.exports = router;
