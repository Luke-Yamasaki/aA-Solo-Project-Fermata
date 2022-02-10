const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});

const router = express.Router();

const { User, Answer, Comment, Like, genre } = require('../db/models');

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    if (!req.session.auth) {
        res.redirect('/welcome');
    }
    const genres = await Genres.findAll()

    res.render('uoload', {
        title: "Ask a Question",
        csrfToken: req.csrfToken(),
        genres,
    });
}));

router.post('/', csrfProtection, asyncHandler(async(req, res) => {
    const {
        name,
        genreId,
        content,
    } = req.body

    if (req.session.auth) {
        const question = await Question.create({
            name,
            genreId,
            userId: req.session.user.id,
            content,
        });

        req.session.save(() => res.redirect(`/questions/${question.id}`));
    };
    req.session.save(() => res.redirect('/welcome'));
}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findOne({
        include: User,
        where: {
            id: questionId
        }
    });

    const userId = req.session.auth.userId

    const answers = await Answer.findAll({
        include: User
      })

    const comments = await Comment.findAll();

    res.render('question-page', {
        questionId,
        question,
        answers,
        userId
    });


}));

router.post('/delete/:id(\\d+)', async(req, res) => {
    const questionId = parseInt(req.params.id, 10);

    const answers = await Answer.findAll({
        where: {
            questionId
        }
    })
    answers.forEach(answer => answer.destroy())
    const question = await Question.findByPk(questionId);
    await question.destroy();
    res.redirect('/')
})

module.exports = router;
