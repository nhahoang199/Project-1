import { Link } from "react-router-dom";
import "./index.scss";
import logo from "./../../logo.svg";
import { ImageDecor1, ImageDecor2 } from "../../Base/image";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__button">
                <Link to="/admin/subject" className="homepage__button__admin">
                    Admin
                </Link>
                <Link to="/user" className="homepage__button__user">
                    User
                </Link>
            </div>
            <img
                src={ImageDecor1}
                alt=""
                className="homepage__decor homepage__decor--1"
            ></img>
            <img
                src={ImageDecor2}
                alt=""
                className="homepage__decor homepage__decor--2"
            ></img>
            <img src={logo} className="homepage__logo" alt="logo" />
        </div>
    );
}
