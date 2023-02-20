import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callAPI from "../../../../Services/api";
import { ButtonBack } from "../Common";
import { ExamItem } from "../ExamList/SubComponents";
import { MixinButton, MixModal } from "./SubComponents";
import "./index.scss";

export default function ExamModal(props: any) {
    const [data, setData] = useState<any[]>([]);
    const [questionData, setQuestionData] = useState<any[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getExamData("examWithCourseNameById/" + id, "GET");
        getQuestion("questionsOfExam/" + id, "GET");
    }, []);

    const getQuestion = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                console.log(response.data)
                setQuestionData(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const getExamData = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                setData(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const hanldeClickMixinButton = () => {
        setIsOpenModal(true);
    };
    const hanldeClickClose = () => {
        setIsOpenModal(false);
    };

    return (
        <div className="examModal__wrap">
            <MixModal
                isOpenModal={isOpenModal}
                onClick={hanldeClickClose}
                examData={data}
                questionData ={questionData}
            />
            <div className="examModal">
                <div className="examModal__title">Tạo đề thi thành công</div>
                <div className="examModal__bar"></div>
                <div className="examModal__header">
                    <div className="examModal__header__id">Id</div>
                    <div className="examModal__header__subject">Môn</div>
                    <div className="examModal__header__name">Tên</div>
                    <div className="examModal__header__type">Loại đề thi</div>
                    <div className="examModal__header__date">Ngày tạo</div>
                    <div className="examModal__header__author">Người tạo</div>
                    <div className="examModal__header__reviewer">
                        Người đánh giá
                    </div>
                </div>
                <div className="examlist__items">
                    <ExamItem item={data} />
                </div>
            </div>
            <div className="examlist__button">
                <ButtonBack />
                <MixinButton onClick={hanldeClickMixinButton} />
            </div>
        </div>
    );
}
