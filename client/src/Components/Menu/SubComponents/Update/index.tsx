import { useState } from "react";
import React from "react";
import { SubjectData, ChapterData } from "../../../../DummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubjectItem, ChapterItem, UpdateButton } from "./SubComponents";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../Common";
import { IChapter } from "../../../../Models/Model";
import "./index.scss";

export default function Update(props: any) {
    const [chapterData, setChapterData] = useState(ChapterData);
    const [subjectData, setSubjectData] = useState(SubjectData);
    const subject = subjectData[Number(useParams().id) - 1];
    const route = "/admin/subject/getAll"
    console.log(Number(useParams().id));
    console.log(subject)
    const SubjectInfo = [
        {
            title: "ID",
            data: subject.id,
        },
        {
            title: "Mã môn học",
            data: subject.code,
        },
        {
            title: "Ngày bắt đầu",
            data: subject.date,
        },
        {
            title: "Mô tả",
            data: subject.description,
        },
    ];
    const [subjectInfo, setSubjectInfo] = useState(SubjectInfo);
    return (
        <div
            className="update"
            style={props.isUpdate === true ? { display: "block" } : {}}
        >
            <div className="update-wrap">
                <div className="update-wrap__title">{subject.title}</div>
                <div className="update-wrap__info">
                    {subjectInfo.map((item, index) => {
                        return <SubjectItem item={item} key={index} />;
                    })}
                </div>
                <div className="update-wrap__chapter">
                    <div className="update-wrap__chapter__title">
                        <div className="update-wrap__chapter__title__info">
                            Chương
                        </div>
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="update-wrap__chapter__title__icon"
                        />
                    </div>
                    <div className="update-wrap__chapter__content">
                        {chapterData.map((item, index) => {
                            return <ChapterItem item={item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
            <div className="update-footer">
                <ButtonBack route={route} />
                <UpdateButton />
            </div>
        </div>
    );
}
