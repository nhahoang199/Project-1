import { Link } from "react-router-dom";
import "./index.scss";

export default function QuestionItem(props: any) {
    const isNormal = props.item.QuestionLevel === 'Easy';
    const isHard = props.item.QuestionLevel === 'Hard';
    let questionLabel;
    if (isNormal) {
      questionLabel = <div className="exam-questions__content__item__question" style= { {color: "orange"}}
      >
          Câu {props.index + 1}: {props.item.QuestionName}
      </div>
    } else if(isHard) {
      questionLabel = <div className="exam-questions__content__item__question" style= { {color: "red"}}
      >
          Câu {props.index + 1}: {props.item.QuestionName}
      </div>;
    }
    else {
        questionLabel = <div className="exam-questions__content__item__question"
        >
            Câu {props.index + 1}: {props.item.QuestionName}
        </div>
    }
    const route = "/user/question/" +props.item.Id;
    return (
        <Link to = {route} className="exam-questions__content__item">
            {questionLabel}
            <div className="exam-questions__content__item__answers">
                <label className="label__container exam-questions__content__item__answer__A">
                    {/* <input
                        type="radio"
                        name={props.index}
                        className="answer-input exam-questions__content__item__answer__A__input"
                        value={props.item.AnswerA}
                    />
                    <span className="answer-checkmark exam-questions__content__item__answer__A__checkmark"></span> */}
                    A. {props.item.AnswerA}
                </label>
                <label className="label__container exam-questions__content__item__answer__B">
                    {/* <input
                        type="radio"
                        name={props.index}
                        className="answer-input exam-questions__content__item__answer__B__input"
                        value={props.item.AnswerB}
                    />
                    <span className="answer-checkmark exam-questions__content__item__answer__B__checkmark"></span> */}
                    B. {props.item.AnswerB}
                </label>
                <label className="label__container exam-questions__content__item__answer__C">
                    {/* <input
                        type="radio"
                        name={props.index}
                        className="answer-input exam-questions__content__item__answer__C__input"
                        value={props.item.AnswerC}
                    />
                    <span className="answer-checkmark exam-questions__content__item__answer__C__checkmark"></span> */}
                    C. {props.item.AnswerC}
                </label>
                <label className="label__container exam-questions__content__item__answer__D">
                    {/* <input
                        type="radio"
                        name={props.index}
                        className="answer-input  exam-questions__content__item__answer__D__input"
                        value={props.item.AnswerD}
                    />
                    <span className="answer-checkmark exam-questions__content__item__answer__D__checkmark"></span> */}
                    D. {props.item.AnswerD}
                </label>
            </div>
        </Link>
    );
}
