import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callAPI from "../../../../Services/api";
import { ButtonBack } from "../Common";
import { ExamItem } from "../ExamList/SubComponents";
import "./index.scss";

export default function ExamModal(props: any) {
    const [data, setData] = useState<any[]>([]);
    const { id } = useParams();
    console.log(id);

    const getExamData = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((response: any) => {
                setData(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getExamData("examWithCourseNameById/" + id, "GET");
    }, []);
    return (
        <div className="examModal__wrap">
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
            </div>
        </div>
    );
}
