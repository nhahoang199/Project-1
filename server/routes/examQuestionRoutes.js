'use strict';

const examQuestionController = require('./../controllers/examQuestionController')
const express = require("express");
const router = express.Router();

const { getExamQuestions } = examQuestionController;

router.get("/examQuestions", getExamQuestions);
// router.get("/chapter/:id", getChapterById);

module.exports = {
    routes: router,
};
