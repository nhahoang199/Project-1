import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBars,
    faUser,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    return (
        <div className="header">
            <div className="header-menu">
                <FontAwesomeIcon className="header-menu__icon" icon={faBars} />
                <div className="header-menu__title">Admin</div>
            </div>
            <div className="header-search">
                <FontAwesomeIcon
                    className="header-search__icon"
                    icon={faMagnifyingGlass}
                />
                <input
                    type="text"
                    className="header-search__input"
                    placeholder="Tìm kiếm"
                />
            </div>
            <div className="header-account">
                <FontAwesomeIcon
                    className="header-account__user"
                    icon={faUser}
                />
                <FontAwesomeIcon
                    className="header-account__icon"
                    icon={faChevronDown}
                />
            </div>
        </div>
    );
}
