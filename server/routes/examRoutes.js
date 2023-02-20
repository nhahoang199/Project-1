"use strict";
const express = require("express");
const examController = require("../controllers/examController");
const router = express.Router();

const {
    getExams,
    getExamById,
    createExam,
    getExamsWithCourseName,
    getExamInfo,
    getExamWithCourseNameById,
    getLastExam
} = examController;

router.get("/exams", getExams);
router.get("/exam/:id", getExamById);
router.get("/examInfo/:id", getExamInfo);
router.get("/examsWithCourseName", getExamsWithCourseName);
router.get("/examWithCourseNameById/:id", getExamWithCourseNameById);
router.post("/exam", createExam);
router.get("/lastExam/:id", getLastExam);

module.exports = {
    routes: router,
};
