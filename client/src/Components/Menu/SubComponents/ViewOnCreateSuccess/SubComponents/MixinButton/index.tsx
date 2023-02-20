import {  faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

export default function MixinButton(props: any) {
    return (
        <button 
            className="mixin-button"
           onClick= {props.onClick}
        >
            <FontAwesomeIcon
                className="mixin-button__icon"
                icon={faPenToSquare}
            />
            <div className="mixin-button__title">Trộn đề</div>
        </button>
    );
}