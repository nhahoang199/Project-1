'use strict';

const courseData = require('../data/courses');

const getCourses = async (req, res, next) => {
    try{
        const courses = await courseData.getCourses();
        res.send(courses);
    }
    catch(err){
        res.status(400).send(err.message);
    }
}

module.exports = {
    getCourses
}