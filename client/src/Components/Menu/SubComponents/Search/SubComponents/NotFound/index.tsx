import React from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

export default function NotFound(props: any) {
    return (
        <div className="not-found" style={props.isEmpty === true ? {display: "flex"} : {}} >
            <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="not-found__icon"
            ></FontAwesomeIcon>
            <div className="not-found__error">Không tìm thấy</div>
        </div>
    );
}