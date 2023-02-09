"use strict";

const utils = require("../data/utils");
const config = require("../config");
const sql = require("mssql");

const getCourses = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("courses");
        const list = await pool.request().query(sqlQueries.coursesList);
        return list.recordset;
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

const getCourseById = async (courseId) => {
    try {
        const pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("courses");
        const course = await pool
            .request()
            .input("courseId", sql.Int, courseId)
            .query(sqlQueries.courseById);
        return course.recordset[0];
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

module.exports = {
    getCourses,
    getCourseById,
};
