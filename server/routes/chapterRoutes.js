'use strict';

const chapterController = require('./../controllers/chapterController')
const express = require("express");
const router = express.Router();

const { getChapters, getChapterById, getChapterByCourseId } = chapterController;

router.get("/chapters", getChapters);
router.get("/chapter/:id", getChapterById);
router.get("/chapters/&courseId=:courseId", getChapterByCourseId);

module.exports = {
    routes: router,
};
