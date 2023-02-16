import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SubmitButton(props: any) {
    
    return (
        <button 
            className="add-exam__footer__button"
            type="submit"
            // value="Thêm"
            onClick={(e) => props.handleSubmit(e)}
        >
            Thêm
        </button>
    );
}
