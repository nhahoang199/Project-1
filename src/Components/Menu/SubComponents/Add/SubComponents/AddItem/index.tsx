import React from "react";
import "./index.scss";

export default function AddItem(props: any) {
    return (
        <div className="form-add__item">
            <div className="form-add__item__title">{props.item.title}</div>
            <input
                type="text"
                className="form-add__item__input"
                placeholder={props.item.description}
            />
        </div>
    );
}
