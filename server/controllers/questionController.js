"use strict";

const questionsService = require("../services/questionServices");

const getQuestions = async (req, res, next) => {
    try {
        const questions = await questionsService.getQuestions();
        res.send(questions);
    } catch (err) {
        res.status(404).send(err.message);
    }
};


const getQuestionById = async (req, res, next) => {
    try {
        const questionId = req.params.id;
        const question = await questionsService.getQuestionById(questionId);
        res.send(question);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const getQuestionsOfExam = async (req, res, next) => {
    try {
        const examId = req.params.id;
        const questions = await questionsService.getQuestionsOfExam(examId);
        res.send(questions);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const getRandomQuestions = async (req, res, next) => {
    try {
        const count = req.params.count;
        const chapterId = req.params.chapterId;
        const questionLevel = req.params.questionLevel;
        const questions = await questionsService.getRandomQuestions(
            count,
            chapterId,
            questionLevel
        );
        res.send(questions);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

module.exports = {
    getQuestions,
    getQuestionsOfExam,
    getRandomQuestions,
    getQuestionById,
};
