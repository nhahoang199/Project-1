'use strict';

const examQuestionService = require('./../services/examQuestionServices');

const getExamQuestions = async (req, res, next) => {
    try {
        const examQuestions = await examQuestionService.getExamQuestions();
        res.send(examQuestions);
    } catch (error) {
        res.status(404).send(error.errorMessage);
    }
};

const createExamQuestion = async (req, res, next) => {
    try {
        const examQuestionData = req.body;
        const insertExamQuestion = await examQuestionService.createExamQuestion(examQuestionData);
        res.send(insertExamQuestion);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.message);
    }
}

module.exports = {
    getExamQuestions, createExamQuestion
}