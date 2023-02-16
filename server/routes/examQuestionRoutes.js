'use strict';

const examQuestionController = require('./../controllers/examQuestionController')
const express = require("express");
const router = express.Router();

const { getExamQuestions, createExamQuestion } = examQuestionController;

router.get("/examQuestions", getExamQuestions);
router.post("/examQuestion", createExamQuestion);
// router.get("/chapter/:id", getChapterById);

module.exports = {
    routes: router,
};
