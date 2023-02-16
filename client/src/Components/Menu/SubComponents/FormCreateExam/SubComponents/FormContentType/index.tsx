export default function FormContentType(props: any) {
    return (
        <div className="add-exam__content__item add-exam__content__type">
            <div className="add-exam__content__item__title add-exam__content__type__title">
                Loại đề thi
            </div>
            <select
                className="add-exam__content__type__input"
                name="select-type"
                onChange={props.handleChangeType}
            >
                <option value="Giữa kỳ">Giữa kỳ</option>
                <option value="Cuối kỳ">Cuối kỳ</option>
            </select>
        </div>
    );
}
