import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

export default function ButtonBack(props: any){
    // const [ defaultId, setDefaultId] = useState(0);
     const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className="button-back" >
            <FontAwesomeIcon className="button-back__icon" icon={faArrowLeft} />
            <div className="button-back__title">Trở về</div>
        </button>
    );
}