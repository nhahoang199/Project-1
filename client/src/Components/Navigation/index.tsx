import React from "react";
import "./index.scss";
import { useState } from "react";
import { NavData } from "../../DummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./SubComponents";

export default function Navigation(props: any) {
    let Nav;
    if (props.isUser) {
        Nav = NavData.filter((item) => {
            return item.id  === 3;
        });
    } else {
        Nav = NavData;
    }
    const [navData, setNavData] = useState(Nav);
    const [isActive, setIsActive] = useState(0);
    return (
        <div className="nav">
            <div className="nav__title">Quản lý </div>
            <div className="nav__items">
                {navData.map((item, index) => {
                    return (
                        <NavItem
                            item={item}
                            key={index}
                            index={index}
                            isActive={isActive}
                            isUser={props.isUser}
                            isAdmin={props.isAdmin}
                        />
                    );
                })}
            </div>
        </div>
    );
}
