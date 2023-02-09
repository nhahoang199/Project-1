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

module.exports = {
    getQuestions
};