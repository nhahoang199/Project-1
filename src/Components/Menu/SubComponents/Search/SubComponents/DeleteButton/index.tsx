import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.scss";

export default function DeleteButton(props: any) {
    return (
        <div
            className="delete-button"
            style={props.isDelete ? { display: "flex" } : { display: "none" }}
            onClick={() => props.deleteItem()
            
            }
        >
            <FontAwesomeIcon
                className="delete-button__icon"
                icon={faTrashCan}
            />
            <div className="delete-button__title">Xóa</div>
        </div>
    );
}
