import React from "react";
import "./index.scss";
import { useState } from "react";
import { MenuData, SubjectData } from "../../DummyData";
import { FormAdd, MenuItem, Update, Search, View } from "./SubComponents";
import { ButtonBack } from "./SubComponents/Common";



export default function Menu() {
    
    const [menuData, setMenuData] = useState(MenuData);
    // const [onActive, setOnActive] = useState(0);
    const [subject, setSubject] = useState(SubjectData[3]);
    const [isUpdate, setIsUpdate] = useState(false);

    // const handleActive = function (id: number) {
    //     switch (id) {
    //         case 1:
    //             setRoute(Routes.viewPath)
    //             break;
    //         case 2:
    //             setRoute(Routes.addPath)
    //             break;
    //         case 3:
    //             setRoute(Routes.updatePath)
    //             break;
    //         case 4:
    //             setRoute(Routes.searchPath)
    //             break;
            
    //         default:
    //             break;
    //     }
    //     // setOnActive(id);
    // };
    const handleBack = function () {
        // setOnActive(0);
    };
    const handleOpenUpdate = function (item: any) {
        console.log(item);
        setIsUpdate(true);
        setSubject(item);
    };
    return (
        <div className="menu">
            <div
                className="menu__items"
                // style={
                //     onActive !== 0 ? { display: "none" } : { display: "flex" }
                // }
            >
                {menuData.map((item, index) => {
                    return (
                        <MenuItem
                            // onClick={() => handleActive(item.id)}
                            item={item}
                            key={item.id}
                        />
                    );
                })}
                ;
            </div>
            {/* <FormAdd id={onActive} />
            <Search id={onActive} />
            <View
                id={onActive}
                isUpdate={isUpdate}
                onClick={() => handleOpenUpdate(subject)}
                subject={subject}
            />
            <Update isUpdate={isUpdate} subject={subject} />
            <ButtonBack onClick={handleBack} id={onActive} /> */}
        </div>
    );
}
