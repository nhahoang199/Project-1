"use strict";

const utils = require("../data/utils");
const config = require("../config");
const sql = require("mssql");

const getChapters = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("chapters");
        const list = await pool.request().query(sqlQueries.chaptersList);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getChapterById = async (chapterId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("chapters");
        const chapter = await pool
            .request()
            .input("chapterId", sql.Int, chapterId)
            .query(sqlQueries.chapterById);
        return chapter.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getChapterByCourseId = async (courseId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("chapters");
        const chapter = await pool
            .request()
            .input("courseId", sql.Int, courseId)
            .query(sqlQueries.chaptersByCourseId);
        return chapter.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

module.exports = {
    getChapters,
    getChapterById,
    getChapterByCourseId,
};
