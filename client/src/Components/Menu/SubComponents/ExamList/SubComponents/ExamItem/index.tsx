import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./index.scss";

export default function ExamItem(props: any) {
    let route = "/user/examQuetions/" + props.item.Id;
    return (
        <Link
            to={route}
            className="examlist__item"
            //  onClick={() => props.onClick(props.item)}
        >
            <div className="examlist__item__id">{props.item.Id}</div>
            <div className="examlist__item__subject">{props.item.CourseName}</div>
            <div className="examlist__item__name">{props.item.ExamName}</div>
            <div className="examlist__item__type">{props.item.ExamType}</div>
            <div className="examlist__item__date">{moment(props.item.DayCreate).format('DD/MM/YYYY')}</div>
            <div className="examlist__item__author">{props.item.Author}</div>
            <div className="examlist__item__reviewer">{props.item.Reviewer}</div>
        </Link>
    );
}