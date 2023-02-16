"use strict";

const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

const { getQuestions,getQuestionsOfExam, getRandomQuestions, getQuestionById } = questionController;

router.get("/questions", getQuestions);
router.get("/questionsOfExam/:id", getQuestionsOfExam);
router.get("/randomQuestions/count=:count&chapterId=:chapterId&questionLevel=:questionLevel", getRandomQuestions);
router.get("/question/:id", getQuestionById);

module.exports = {
    routes: router,
};
