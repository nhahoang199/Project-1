"use strict";

const courseService = require("../services/courseServices.js");

const getCourses = async (req, res, next) => {
    try {
        const courses = await courseService.getCourses();
        res.send(courses);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const getCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.id;
        const course = await courseService.getCourseById(courseId);
        res.send(course);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
module.exports = {
    getCourses,
    getCourseById,
};
