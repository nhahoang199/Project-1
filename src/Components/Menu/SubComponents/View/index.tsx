import "./index.scss";
import { ButtonBack } from "../Common";
import { useState } from "react";
import { SubjectData } from "../../../../DummyData";
import { ViewItem } from "./SubComponents";

export default function View(props: any) {
    const [data, setData] = useState(SubjectData);
    const [isUpdate, setIsUpdate] = useState();
    const route = "/admin/subject";
    return (
        <div className="view__wrap">
            <div
                className="view"
                // style={
                //     props.id === 1 && props.isUpdate === false
                //         ? { display: "block" }
                //         : {}
                // }
            >
                <div className="view__title">Danh sách môn học</div>
                <div className="view__bar"></div>
                <div className="view__header">
                    <div className="view__header__id">Id</div>
                    <div className="view__header__code">Mã môn học</div>
                    <div className="view__header__title">Tên môn học</div>
                    <div className="view__header__desc">Mô tả</div>
                    <div className="view__header__date">Ngày bắt đầu</div>
                </div>
                <div className="view__items">
                    {data.map((item, index) => {
                        return (
                            <ViewItem
                                item={item}
                                key={index}
                                // onClick={() => props.onClick(props.subject)}
                            />
                        );
                    })}
                </div>
            </div>
            <ButtonBack/>
        </div>
    );
}
