import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { IChapter } from "../../../../../../Models/Model";
import "./index.scss";


export default function ChapterItem(props: any) {
    return (
        <div className="chapter-item">
            <div className="chapter-item__stt">
                {props.item.stt}.
            </div>
            <div className="chapter-item__name">
                {props.item.name}
            </div>
            <FontAwesomeIcon
                icon={faCircleXmark}
                className="chapter-item__icon"
            />
        </div>
    );
}
