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

module.exports = {
    getQuestions,
};
