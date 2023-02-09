"use strict";
const express = require("express");
const examController = require("../controllers/examController");
const router = express.Router();

const { getExams, getExamById, createExam } = examController;

router.get("/exams", getExams);
router.get("/exam/:id", getExamById);
router.post("/exam", createExam);
module.exports = {
    routes: router,
};
