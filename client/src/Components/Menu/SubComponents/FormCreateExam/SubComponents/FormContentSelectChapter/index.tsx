export default function FormContentSelectChapter(props: any) {
    return (
        <div className="add-exam__content__item add-exam__content__chapters">
            <div className="add-exam__content__item__title add-exam__content__chapters__title">
                Chọn chương
            </div>
            <div className="add-exam__content__chapters__items">
                {props.chapterData.map((item:any, index:any) => {
                    return (
                        <div
                            className="add-exam__content__chapters__item"
                            key={index}
                        >
                            <label onClick={() => props.handleClick(item.ChapterName)} className="add-exam__content__chapters__item__label">
                                <input
                                    type="checkbox"
                                    className="add-exam__content__chapters__item__input"
                                    onChange={props.handleChange}
                                    value={item.Id}
                                />
                                <span className="add-exam__content__chapters__item__checkmark"></span>
                                {item.ChapterName}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
