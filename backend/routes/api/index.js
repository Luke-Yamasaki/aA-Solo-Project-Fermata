const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/')

module.exports = router;
