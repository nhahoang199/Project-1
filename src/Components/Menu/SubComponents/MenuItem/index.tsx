import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import "./index.scss";

export default function MenuItem(props: any) {
    
    return (
        <Link to =  {props.isUser ? props.item.userRoute : props.item.route}
            className="menu__item"
            style={{ borderLeftColor: props.item.color }}
            // onClick = {() => props.onClick(props.item.id)}
        >
            <div className="menu__item__title">{props.item.title}</div>
            <div className="menu__item__description">
                {props.item.description}
            </div>
            <div
                className="menu__item__circle"
                style={{ backgroundColor: props.item.color }}
            >
                <FontAwesomeIcon
                    className="menu__item__circle__icon"
                    icon={props.item.icon}
                />
            </div>
        </Link>
    );
}