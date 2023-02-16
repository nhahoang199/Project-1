import React from "react";

interface IChapter {
    stt: string;
    name: string;
}
interface ISubject {
    id: string;
    title: string;
    description: string;
    date: string;
    code: string;
}
interface ISubjectInfo {
    item: any;
    title: string;
    data: string;
}

interface IChapterParams {
    chapterId: number;
    questionCount: number;
    easyCount: number;
    mediumCount: number;
    hardCount: number;
}

export type { IChapterParams, IChapter, ISubject, ISubjectInfo };
