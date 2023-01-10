import  React  from "react";

interface IChapter {
    stt: string,
    name: string,
}
interface ISubject {
    id: string,
    title: string,
    description: string,
    date: string,
    code: string,
}
interface ISubjectInfo {
    item: any;
    title: string;
    data: string;
}
export type { IChapter, ISubject, ISubjectInfo };