"use strict";
const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();

const { getCourses } = courseController;

router.get("/courses", getCourses);

module.exports = {
    routes: router,
};
