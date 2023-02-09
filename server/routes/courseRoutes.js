"use strict";
const courseController = require("../controllers/courseController");
const express = require("express");
const router = express.Router();

const { getCourses,getCourseById } = courseController;

router.get("/courses", getCourses);
router.get("/course/:id", getCourseById);

module.exports = {
    routes: router,
};
