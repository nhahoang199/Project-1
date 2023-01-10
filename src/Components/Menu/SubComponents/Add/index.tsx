import { useState } from "react";
import "./index.scss";
import { AddData } from "../../../../DummyData";
import { ButtonBack } from "../Common";
import { AddItem } from "./SubComponents";

export default function FormAdd(props: any) {
    const [data, setData] = useState(AddData);
    const route = "/admin/subject";
    const handleSubmit = function (e: any) {
        e.preventDefault();
    };
    return (
        <div className="add" style={props.id === 2 ? { display: "block" } : {}}>
            <form className="form-add">
                <div className="form-add__title">Thêm mới</div>
                <div className="form-add__bar"></div>
                <div className="form-add__items">
                    {data.map((item, index) => {
                        return <AddItem item={item} key={index} />;
                    })}
                </div>
                <div className="form-add__footer">
                    <input
                        className="form-add__footer__button"
                        type="submit"
                        value="Thêm"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            <div className="add__button">
                <ButtonBack route={route} />
            </div>
        </div>
    );
}
