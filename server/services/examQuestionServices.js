"use strict";

const utils = require("./../data/utils");
const config = require("../config");
const sql = require("mssql");

const getExamQuestions = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("examQuestions");
        const list = await pool.request().query(sqlQueries.examQuestionsList);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const createExamQuestion = async (examQuestionData) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("examQuestions");
        const insertExam = await pool
            .request()
            .input("examId", sql.Int, examQuestionData.examId)
            .input("questionId", sql.Int, examQuestionData.questionId)
            .query(sqlQueries.createExamQuestion);
        return insertExam.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

module.exports = { getExamQuestions, createExamQuestion };
