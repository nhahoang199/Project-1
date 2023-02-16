"use strict";

const utils = require("../data/utils");
const config = require("../config");
const sql = require("mssql");

const getExams = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const list = await pool.request().query(sqlQueries.examsList);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getExamById = async (examId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const exam = await pool
            .request()
            .input("examId", sql.Int, examId)
            .query(sqlQueries.examById);
        return exam.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getExamInfo = async (examId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const exam = await pool
            .request()
            .input("examId", sql.Int, examId)
            .query(sqlQueries.examInfo);
        return exam.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getExamsWithCourseName = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const list = await pool
            .request()
            .query(sqlQueries.examsListWithCourseName);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getExamWithCourseNameById = async (examId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const exam = await pool
            .request()
            .input("examId", sql.Int, examId)
            .query(sqlQueries.examByIdWithCourseName);
        return exam.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const createExam = async (examData) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("exams");
        const insertExam = await pool
            .request()
            .input("courseId", sql.Int, examData.courseId)
            .input("examName", sql.NVarChar(255), examData.examName)
            .input("examType", sql.NVarChar(255), examData.examType)
            .input("dayCreate", sql.Date, examData.dayCreate)
            .input("author", sql.NVarChar(255), examData.author)
            .input("reviewer", sql.NVarChar(255), examData.reviewer)
            .query(sqlQueries.createExam);
        return insertExam.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

module.exports = {
    getExams,
    getExamById,
    createExam,
    getExamsWithCourseName,
    getExamInfo,
    getExamWithCourseNameById,
};
