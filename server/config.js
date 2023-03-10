"use strict";
const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE,
    SQL_SERVER,
    SQL_INSTANCE
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "Port is required");
assert(HOST, "Host is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        port: 1433,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true,
        },
        // instanceName: "NHAHOANG"
        // instance: SQL_INSTANCE
    },
};
