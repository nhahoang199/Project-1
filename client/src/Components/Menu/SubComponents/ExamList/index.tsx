import "./index.scss";

import { ButtonBack } from "../Common";
import { useEffect, useState } from "react";
import { ExamItem } from "./SubComponents";
import callAPI from "../../../../Services/api";

export default function ExamList(props: any) {
    const [data, setData] = useState([]);

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
        getExamData("examsWithCourseName", "GET");
    }, []);
    return (
        <div className="examlist__wrap">
            <div className="examlist">
                <div className="examlist__title">Danh sách đề thi</div>
                <div className="examlist__bar"></div>
                <div className="examlist__header">
                    <div className="examlist__header__id">Id</div>
                    <div className="examlist__header__subject">Môn</div>
                    <div className="examlist__header__name">Tên</div>
                    <div className="examlist__header__type">Loại đề thi</div>
                    <div className="examlist__header__date">Ngày tạo</div>
                    <div className="examlist__header__author">Người tạo</div>
                    <div className="examlist__header__reviewer">
                        Người đánh giá
                    </div>
                </div>
                <div className="examlist__items">
                    {data.map((item, index) => {
                        return (
                            <ExamItem
                                item={item}
                                key={index}
                                // onClick={() => props.onClick(props.subject)}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="examlist__button">
                <ButtonBack />
            </div>
        </div>
    );
}

