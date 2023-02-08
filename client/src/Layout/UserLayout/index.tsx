import "./index.scss";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import ContentHeader from "../../Components/ContentHeader";
import { useState } from "react";


export default function UserLayout(props: any) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(true);
    return (
        <div className="Layout">
            <div className="Header">
                <Header />
            </div>
            <div className="wrap-content">
                <div className="content__left-side">
                    <Navigation isUser={isUser} isAdmin={isAdmin} />
                </div>
                <div className="content__right-side">
                    <ContentHeader isUser={isUser} isAdmin={isAdmin} />
                    <div className="content__right-side__content">
                        <props.Page isUser={isUser} isAdmin={isAdmin} />
                    </div>
                </div>
            </div>
        </div>
    );
}
