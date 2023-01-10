import "./index.scss";

export default function SubjectItem(props: any) {
    return (
        <div className="subject-item">
            <div className="subject-item__title">{props.item.title}</div>
            <div className="subject-item__content">{props.item.data}</div>
        </div>
    );
}
