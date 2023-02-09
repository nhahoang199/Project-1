'use strict';

const chapterService = require('./../services/chapterServices');

const getChapters = async (req, res, next) => {
    try{
        const chapters = await chapterService.getChapters();
        res.send(chapters);
    }
    catch (err){
        res.status(404).send(err.message);
    }
};

const getChapterById = async (req, res, next) => {
    try{
        const chapterId = req.params.id;
        const chapter = await chapterService.getChapterById(chapterId);
        res.send(chapter);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = {
    getChapters,
    getChapterById
};