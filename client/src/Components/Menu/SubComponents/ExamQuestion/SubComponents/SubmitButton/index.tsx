import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.scss";

export default function SubmitButton(props: any) {
    return (
        <button type="submit"
            className="submit-button"
            onClick={(e) =>e.preventDefault() 
            
            }
        >
            <FontAwesomeIcon
                className="submit-button__icon"
                icon={faPaperPlane}
            />
            <div className="submit-button__title">Nộp bài</div>
        </button>
    );
}