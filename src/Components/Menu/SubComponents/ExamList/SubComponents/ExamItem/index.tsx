import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function ExamItem(props: any) {
    let route = "/user/exam/getAll/" + props.item.id;
    return (
        <Link
            to={route}
            className="examlist__item"
            //  onClick={() => props.onClick(props.item)}
        >
            <div className="examlist__item__id">{props.item.id}</div>
            <div className="examlist__item__code">{props.item.code}</div>
            <div className="examlist__item__title">{props.item.title}</div>
            <div className="examlist__item__desc">{props.item.description}</div>
            <div className="examlist__item__date">{props.item.date}</div>
        </Link>
    );
}
