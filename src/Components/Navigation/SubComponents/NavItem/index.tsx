import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavItem(props:any) {
    return (
        <Link
            to={props.isUser ? props.item.userPath : props.item.path}
            className="nav__item"
            style={
                props.isActive === props.index ? { background: "#d1eee8" } : {}
            }
        >
            <FontAwesomeIcon
                className="nav__item__icon"
                icon={props.item.icon}
            />
            <div className="nav__item__title">{props.item.title}</div>
            <FontAwesomeIcon
                className="nav__item__arrow"
                icon={
                    props.isActive === props.index
                        ? faChevronRight
                        : faChevronDown
                }
                style={
                    props.isActive === props.index ? { color: "#212121" } : {}
                }
            />
        </Link>
    );
}