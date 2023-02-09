"use strict";

const examServices = require("../services/examServices.js");

const getExams = async (req, res, next) => {
    try {
        const exams = await examServices.getExams();
        res.send(exams);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const getExamById = async (req, res, next) => {
    try {
        const examId = req.params.id;
        const exam = await examServices.getExamById(examId);
        res.send(exam);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const createExam = async (req, res, next) => {
    try {
        const examData = req.body;
        const insertExam = await examServices.createExam(examData);
        res.send(insertExam);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.message);
    }
};

module.exports = {
    getExams,
    getExamById,
    createExam
};