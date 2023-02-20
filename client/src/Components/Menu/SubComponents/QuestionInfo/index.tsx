import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonBack } from "../Common";
import {
    SubjectItem,
    ChapterItem,
    UpdateButton,
} from "../Update/SubComponents";
import "./index.scss";
import { QuestionsData } from "../../../../DummyData";
import { QuestionItem } from "./SubComponents";
import { useEffect, useState } from "react";
import callAPI from "../../../../Services/api";
import { useParams } from "react-router-dom";

export default function QuestionInfo(props: any) {
    const [questionData, setQuestionData] = useState<any>({});
    const { id } = useParams();

    const getQuestionById = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((res: any) => {
                console.log(res.data);
                setQuestionData(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getQuestionById("question/" + id, "GET");
        console.log(questionData);
    }, []);
    const QuestionInfo = [
        {
            title: "ID",
            data: questionData.Id,
        },
        {
            title: "Id Chương",
            data: questionData.ChapterId,
        },
        {
            title: "Tên Chương",
            data: questionData.ChapterName,
        },
        {
            title: "Môn học",
            data: questionData.CourseName,
        },
        {
            title: "Câu hỏi",
            data: questionData.QuestionName,
        },
        {
            title: "Độ khó",
            data: questionData.QuestionLevel,
        },
        {
            title: "Trọng số",
            data: questionData.QuestionWeight,
        },
        {
            title: "Ảnh",
            data: questionData.QuestionImage,
        },
        {
            title: "Đáp án A",
            data: questionData.AnswerA,
        },
        {
            title: "Đáp án B",
            data: questionData.AnswerB,
        },
        {
            title: "Đáp án C",
            data: questionData.AnswerC,
        },
        {
            title: "Đáp án D",
            data: questionData.AnswerD,
        },
        {
            title: "Đáp án đúng",
            data: questionData.CorrectAnswer,
        },
    ];

    return (
        <div className="question-info">
            <div className="question-info-wrap">
                <div className="question-info-wrap__title">Câu hỏi</div>
                <div className="question-info-wrap__info">
                    {QuestionInfo.map((item: any, index: number) => {
                        return <QuestionItem item={item} key={index} />;
                    })}
                </div>
                {/* <div className="question-info-wrap__chapter">
                    <div className="question-info-wrap__chapter__title">
                        <div className="question-info-wrap__chapter__title__info">
                            Chương
                        </div>
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="question-info-wrap__chapter__title__icon"
                        />
                    </div>
                    <div className="question-info-wrap__chapter__content">
                        {props.chapterData.map((item: any, index: number) => {
                            return <ChapterItem item={item} key={index} />;
                        })}
                    </div>
                </div> */}
            </div>
            <div className="question-info__footer">
                <ButtonBack />
            </div>
        </div>
    );
}
