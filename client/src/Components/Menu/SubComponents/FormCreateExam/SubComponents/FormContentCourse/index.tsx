import "./index.scss";

export default function FormContentCourse(props: any) {
    return (
        <div className="add-exam__content__item add-exam__content__subject">
            <div className="add-exam__content__item__title add-exam__content__subject__title">
                Chọn môn học
            </div>
            <select
                className="add-exam__content__subject__input"
                name="select-subject"
                onChange={props.handleChangeCourse}
            >
                {props.data.map((item:any, index:any) => {
                    return (
                        <option value={item.Id} key={index}>
                            {item.CourseName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
