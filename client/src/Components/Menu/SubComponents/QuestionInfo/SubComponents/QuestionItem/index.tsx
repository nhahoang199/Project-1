import "./index.scss"

export default function QuestionItem( props: any) {
    return (
        <div className="question-item">
            <div className="question-item__title">{props.item.title}</div>
            <div className="question-item__content">{props.item.data}</div>
        </div>
    )
}