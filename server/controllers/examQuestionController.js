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

module.exports = {
    getExamQuestions
}