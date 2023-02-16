"use strict";

const utils = require("../data/utils");
const config = require("../config");
const sql = require("mssql");

const getQuestions = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("questions");
        const list = await pool.request().query(sqlQueries.questionsList);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getQuestionById = async (questionId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("questions");
        const question = await pool
            .request()
            .input("questionId", sql.Int, questionId)
            .query(sqlQueries.questionById);
        return question.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getQuestionsOfExam = async (examId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("questions");
        const list = await pool
            .request()
            .input("examId", sql.Int, examId)
            .query(sqlQueries.questionsOfExam);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getRandomQuestions = async (count, chapterId, questionLevel) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("questions");
        const list = await pool
            .request()
            .input("count", sql.Int, count)
            .input("chapterId", sql.Int, chapterId)
            .input("questionLevel", sql.NVarChar(20), questionLevel)
            .query(sqlQueries.getRandomQuestions);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

module.exports = {
    getQuestions,
    getQuestionsOfExam,
    getRandomQuestions,
    getQuestionById,
};
