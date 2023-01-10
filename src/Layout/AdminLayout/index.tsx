import "./Layout.scss";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import ContentHeader from "../../Components/ContentHeader";
export default function AdminLayout(props: any) {
    
    return (
        <div className="Layout">
            <div className="Header">
                <Header />
            </div>
            <div className="wrap-content">
                <div className="content__left-side">
                    <Navigation />
                </div>
                <div className="content__right-side">
                    <ContentHeader />
                    <div className="content__right-side__content">
                        <props.Page />
                    </div>
                </div>
            </div>
        </div>
    );
}
