import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { ButtonBack } from "../Common";
import { ExamItem } from "../ExamList/SubComponents";
import callAPI from "../../../../Services/api";
import "./index.scss";

export default function LastExams() {
    const [lastExamData, setLastExamData] = useState<any[]>([]);
    const { id } = useParams();
    useEffect(() => {
        getExamData("lastexam/" + id, "GET");
    }, []);

    const getExamData = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                setLastExamData(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="last-exam__wrap">
            <div className="last-exam">
                <div className="last-exam__title">Tạo đề thi thành công</div>
                <div className="last-exam__bar"></div>
                <div className="last-exam__header">
                    <div className="last-exam__header__id">Id</div>
                    <div className="last-exam__header__subject">Môn</div>
                    <div className="last-exam__header__name">Tên</div>
                    <div className="last-exam__header__type">Loại đề thi</div>
                    <div className="last-exam__header__date">Ngày tạo</div>
                    <div className="last-exam__header__author">Người tạo</div>
                    <div className="last-exam__header__reviewer">
                        Người đánh giá
                    </div>
                </div>
                <div className="examlist__items">
                    {lastExamData.map((item, index) => {
                        return <ExamItem item={item} key = {index} />;
                    })}
                </div>
            </div>
            <div className="examlist__button">
                <ButtonBack />
            </div>
        </div>
    );
}
