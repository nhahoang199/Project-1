'use strict';

const chapterController = require('./../controllers/chapterController')
const express = require("express");
const router = express.Router();

const { getChapters, getChapterById } = chapterController;

router.get("/chapters", getChapters);
router.get("/chapter/:id", getChapterById);

module.exports = {
    routes: router,
};
