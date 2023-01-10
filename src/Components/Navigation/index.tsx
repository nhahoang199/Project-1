import React from "react";
import "./index.scss";
import { useState } from "react";
import { NavData } from "../../DummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
    const [navData, setNavData] = useState(NavData);
    const [isActive, setIsActive] = useState(0);
    return (
        <div className="nav">
            <div className="nav__title">Quản lý </div>
            <div className="nav__items">
                {navData.map((item, index) => {
                    return (
                        <div
                            className="nav__item"
                            key={index}
                            style={
                                isActive === index
                                    ? { background: "#d1eee8" }
                                    : {}
                            }
                        >
                            <FontAwesomeIcon
                                className="nav__item__icon"
                                icon={item.icon}
                            />
                            <div className="nav__item__title">{item.title}</div>
                            <FontAwesomeIcon
                                className="nav__item__arrow"
                                icon={
                                    isActive === index
                                        ? faChevronRight
                                        : faChevronDown
                                }
                                style={
                                    isActive === index
                                        ? { color: "#212121" }
                                        : {}
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
