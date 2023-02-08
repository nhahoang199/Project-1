"use strict";

const courseService = require("./../services/courseServices");

const getCourses = async (req, res, next) => {
    try {
        const courses = await courseService.getCourses();
        res.send(courses);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = {
    getCourses,
};
