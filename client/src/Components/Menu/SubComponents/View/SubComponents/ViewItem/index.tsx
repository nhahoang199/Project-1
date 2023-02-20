import { Link } from "react-router-dom";
import "./index.scss";

export default function ViewItem(props: any) {
    let route = "/admin/subject/getAll/" + props.item.id;
    return (
        <Link
            to= {route}
            className="view__item"
        >
            <div className="view__item__id">{props.item.id}</div>
            <div className="view__item__code">{props.item.code}</div>
            <div className="view__item__title">{props.item.title}</div>
            <div className="view__item__desc">{props.item.description}</div>
            <div className="view__item__date">{props.item.date}</div>
        </Link>
    );
}