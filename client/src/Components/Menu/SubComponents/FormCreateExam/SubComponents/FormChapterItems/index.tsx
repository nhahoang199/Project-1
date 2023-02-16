export default function FormChapterItems(props: any) {
    return (
        <div className="add-exam__chapter-items">
            {props.selectChapter.map((item: any, index: any) => {
            // console.log(props.chapterParams[`${index}`].questionCount)
                return (
                    <div className="add-exam__chapter-item" key={index}  >

                        <div className="add-exam__chapter-item__count">
                            <div className="add-exam__chapter-item__count__title">
                                {item}:
                            </div>
                            <input
                                type="text"
                                placeholder="Chọn số câu hỏi"
                                className="add-exam__chapter-item__count__input"
                                // value = {props.chapterParams[`${index}`].questionCount }
                                onChange={(e) => props.handleChangeQuestionCount(e, index)}
                            ></input>
                        </div>
                        <div className="add-exam__chapter-item__number-question">
                            <div className="add-exam__chapter-item__number-question__easy">
                                <div className="add-exam__chapter-item__number-question__easy__title">
                                    Số câu dễ:
                                </div>
                                <input
                                    type="text"
                                    placeholder="Chọn số câu hỏi"
                                    className="add-exam__chapter-item__number-question__easy__input"
                                // value = {props.chapterParamsArr[`${index}`].easyCount || ''}

                                    onChange={
                                        (e) =>props.handleChangeEasyQuestionCount(e, index)
                                    }
                                ></input>
                            </div>
                            <div className="add-exam__chapter-item__number-question__normal">
                                <div className="add-exam__chapter-item__number-question__normal__title">
                                    Số câu trung bình:
                                </div>
                                <input
                                    type="text"
                                    placeholder="Chọn số câu hỏi"
                                    className="add-exam__chapter-item__number-question__normal__input"
                                // value = {props.chapterParamsArr[`${index}`].mediumCount || ''}

                                    onChange={
                                        (e) => props.handleChangeMediumQuestionCount(e, index)
                                    }
                                ></input>
                            </div>
                            <div className="add-exam__chapter-item__number-question__hard">
                                <div className="add-exam__chapter-item__number-question__hard__title">
                                    Số câu khó:
                                </div>
                                <input
                                    type="text"
                                    placeholder="Chọn số câu hỏi"
                                    className="add-exam__chapter-item__number-question__hard__input"
                                // value = {props.chapterParamsArr[`${index}`].hardCount || ''}

                                    onChange={
                                        (e) => props.handleChangeHardQuestionCount(e, index)
                                    }
                                ></input>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
