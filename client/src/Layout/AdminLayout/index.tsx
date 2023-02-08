import "./Layout.scss";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import ContentHeader from "../../Components/ContentHeader";
import { useState } from "react";
export default function AdminLayout(props: any) {
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    return (
        <div className="Layout">
            <div className="Header">
                <Header isAdmin={isAdmin} />
            </div>
            <div className="wrap-content">
                <div className="content__left-side">
                    <Navigation isUser={isUser} isAdmin={isAdmin} />
                </div>
                <div className="content__right-side">
                    <ContentHeader />
                    <div className="content__right-side__content">
                        <props.Page isUser={isUser} isAdmin={isAdmin} />
                    </div>
                </div>
            </div>
        </div>
    );
}
