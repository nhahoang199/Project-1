import "./index.scss";
import { useEffect, useState } from "react";
import { QuestionsData } from "../../../../DummyData";
import callAPI from "../../../../Services/api";
import { useParams } from "react-router-dom";
import { QuestionItem } from "./SubComponents";
import { ButtonBack } from "../Common";

export default function ExamQuestion(props: any) {
    const [data, setData] = useState([]);
    const [examInfo, setExamInfo] = useState<any>([]);

    const { id } = useParams();
    
    const getExamInfo = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                setExamInfo(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getQuestion = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                setData(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getQuestion("questionsOfExam/" + id, "GET");
        getExamInfo("examInfo/" + id, "GET");
    }, []);
    return (
        <div className="exams-questions-wrap">
            <div className="exam-questions">
                <div className="exam-questions__header">
                    <div className="exam-questions__header__top">
                        <div className="exam-questions__header__top__title">
                            <div className="exam-questions__header__top__title__ministry">
                                BỘ GIÁO DỤC VÀ ĐÀO TẠO
                            </div>
                            <div className="exam-questions__header__top__title__school">
                                TRƯỜNG ĐIỆN - ĐIỆN TỬ
                            </div>
                        </div>
                        <div className="exam-questions__header__top__exam-info">
                            <div className="exam-questions__header__top__exam-info__course">
                                Môn: {examInfo.CourseName}
                            </div>
                            <div className="exam-questions__header__top__exam-info__type">
                                Kỳ thi: {examInfo.ExamType}
                            </div>
                            <div className="exam-questions__header__top__exam-info__time">
                                Thời gian làm bài: 90 phút
                            </div>
                        </div>
                    </div>
                    <div className="exam-questions__header__bot">
                        <div className="exam-questions__header__bot__code">
                            Mã đề thi: {examInfo.ExamName}
                        </div>
                    </div>
                </div>
                <div className="exam-questions__content">
                    <div className="exam-questions__content__items">
                        {data.map((item: any, index: any) => {
                            return (
                                <QuestionItem key = {index} item = {item}  index = {index}/>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="exams-questions-button">
                <ButtonBack/>
                {/* <SubmitButton/> */}
            </div>
        </div>
        
    );
}
