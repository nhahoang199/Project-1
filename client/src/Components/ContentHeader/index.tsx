import React from "react";
import "./index.scss"
export default function ContentHeader(props: any) {
    return (
        <div className="content-header">
            <div className="content-header__title">
                {props.isUser ? "Đề thi" : "Môn học"}
            </div>
            <div className="content-header__bar"></div>
        </div>
    );
}
