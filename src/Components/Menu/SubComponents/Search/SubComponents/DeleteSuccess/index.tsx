import React, { useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

export default function DeleteSuccess(props: any) {
    const subject = props.onDelete;
    return (
        <div className="delete-success" style={props.isDeleteSuccess ? {display: "flex"}: {}} >
            <FontAwesomeIcon
                icon={faCircleCheck}
                className="delete-success__icon"
            ></FontAwesomeIcon>
            <div className="delete-success__messenger">
                <div className="delete-success__messenger__title">
                    Bạn đã xóa thành công môn học
                </div>
                <div className="delete-success__messenger__name">
                    {subject.code} - {subject.title}
                </div>
            </div>
        </div>
    );
}
