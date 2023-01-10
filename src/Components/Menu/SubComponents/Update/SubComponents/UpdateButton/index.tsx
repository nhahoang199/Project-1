import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

export default function UpdateButton() {
    return (
        <div className="update-button">
            <FontAwesomeIcon
                icon={faPenClip}
                className="update-button__icon"
            ></FontAwesomeIcon>
            <div className="update-button__content">Cập nhật</div>
        </div>
    );
}
