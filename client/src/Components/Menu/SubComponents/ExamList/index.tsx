import "./index.scss";

import { ButtonBack } from "../Common";
import { useState } from "react";
import { SubjectData } from "../../../../DummyData";
// import { ViewItem } from "./SubComponents";

export default function ExamList(props: any) {
    const [data, setData] = useState(SubjectData);
    const [isUpdate, setIsUpdate] = useState();
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
                    {/* {data.map((item, index) => {
                        return (
                            <ViewItem
                                item={item}
                                key={index}
                                // onClick={() => props.onClick(props.subject)}
                            />
                        );
                    })} */}
                </div>
            </div>
            <ButtonBack />
        </div>
    );
}