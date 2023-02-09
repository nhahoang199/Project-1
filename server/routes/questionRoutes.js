"use strict";

const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

const { getQuestions } = questionController;

router.get("/questions", getQuestions);
// router.get("/exam/:id", getExamById);

module.exports = {
    routes: router,
};
