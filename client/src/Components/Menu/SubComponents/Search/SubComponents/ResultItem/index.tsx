import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.scss";

export default function ResultItem(props: any) {
    let route = "/admin/subject/getAll/" + props.item.id;
    // isDeleteComponent
    return (
        <Link
            to={props.isDeleteComponent ? "" : route}
            className="result__item"
            onClick={() => props.targetDelete(props.item)}
            style={
                props.targetItem.id === props.item.id
                    ? { backgroundColor: "rgb(239 242 246)" }
                    : {}
            }
        >
            <div className="result__item__id">{props.item.id}</div>
            <div className="result__item__info">
                <div className="result__item__info__title">
                    {props.item.title}
                </div>
                <div className="result__item__info__desc">
                    {props.item.description}
                </div>
                <div className="result__item__info__footer">
                    <div className="result__item__info__footer__time">
                        <FontAwesomeIcon id="icon-date" icon={faCalendarDays} />
                        {props.item.date}
                    </div>
                    <div className="result__item__info__footer__code">
                        {props.item.code}
                    </div>
                </div>
            </div>
        </Link>
    );
}
