import "./index.scss";
import { useState } from "react";
import { MenuData, SubjectData, UserMenu } from "../../DummyData";
import {MenuItem} from "./SubComponents";

export default function Menu(props: any) {
    console.log("user:" + props.isUser);
    console.log("admin:" + props.isAdmin);
    let Menu;
    if (props.isUser) {
        Menu = UserMenu;
    } else {
        Menu = MenuData;
    }
    const [menuData, setMenuData] = useState(Menu);
    return (
        <div className="menu">
            <div
                className="menu__items"
            >
                {menuData.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            key={item.id}
                            isUser = {props.isUser}
                        />
                    );
                })}
                ;
            </div>
        </div>
    );
}
