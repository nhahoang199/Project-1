import { useState } from "react";
import { AddData, ChapterData } from "../../../../DummyData";
import { AddItem } from "../Add/SubComponents";
import { ButtonBack } from "../Common";
import { SubjectData } from "../../../../DummyData";
import "./index.scss";

export default function FormExam(props: any) {
    const chapterData = [
        {
            id: 1,
            name: "Chương I",
            isChecked: false,
        },
        {
            id: 2,
            name: "Chương I2",
            isChecked: false,
        },
        {
            id: 3,
            name: "Chương I3",
            isChecked: false,
        },
        {
            id: 4,
            name: "Chương I4",
            isChecked: false,
        },
        {
            id: 5,
            name: "Chương I5",
            isChecked: false,
        },
        {
            id: 6,
            name: "Chương I6",
            isChecked: false,
        },
    ];
    const [selectChapter, setSelectChapter] = useState<any[]>([]);

    const [isChecked, setIsChecked] = useState(false);
    const [data, setData] = useState(SubjectData);
    const [data2, setData2] = useState(ChapterData);
    const route = "/admin/subject";
    const handleSubmit = function (e: any) {
        e.preventDefault();
    };
    const handleChange = (e: any) => {
        const checkedValue = e.target.value;
        console.log(checkedValue)
        if(!e.target.checked) {
            setSelectChapter( selectChapter.filter( (item) => {
                return item !== checkedValue
            }))
        }
        else{
            setSelectChapter(() => [...selectChapter, checkedValue]);
            
        }

        console.log(selectChapter);
    };

    // const handleClick = (item: any) => {
    //    setData2(() => {
    //     item.isChecked = !item.isChecked
    //     return [...chapterData];
    //    })
    // }
    return (
        <div className="add-exam-wrap">
            <form className="add-exam">
                <div className="add-exam__title">Tạo đề thi</div>
                <div className="add-exam__bar"></div>
                <div className="add-exam__content">
                    <div className="add-exam__content__item add-exam__content__subject">
                        <div className="add-exam__content__item__title add-exam__content__subject__title">
                            Chọn môn học
                        </div>
                        <select
                            className="add-exam__content__subject__input"
                            name="select-subject"
                        >
                            {data.map((item, index) => {
                                return (
                                    <option value={item.code} key={index}>
                                        {item.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="add-exam__content__item add-exam__content__type">
                        <div className="add-exam__content__item__title add-exam__content__type__title">
                            Loại đề thi
                        </div>
                        <select
                            className="add-exam__content__type__input"
                            name="select-type"
                        >
                            <option value="Giữa kỳ">Giữa kỳ</option>
                            <option value="Cuối kỳ">Cuối kỳ</option>
                        </select>
                    </div>
                    <div className="add-exam__content__item add-exam__content__chapters">
                        <div className="add-exam__content__item__title add-exam__content__chapters__title">
                            Chọn chương
                        </div>
                        <div className="add-exam__content__chapters__items">
                            {chapterData.map((item, index) => {
                                return (
                                    <div
                                        className="add-exam__content__chapters__item"
                                        key={index}
                                    >
                                        <label className="add-exam__content__chapters__item__label">
                                            <input
                                                type="checkbox"
                                                className="add-exam__content__chapters__item__input"
                                                onChange={handleChange}
                                                value={item.name}
                                                // checked={item.isChecked}
                                                // onClick={() =>
                                                //     handleClick(item)
                                                // }
                                            />
                                            <span className="add-exam__content__chapters__item__checkmark"></span>
                                            {item.name}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="add-exam__content__item add-exam__content__count">
                        <div className="add-exam__content__item__title add-exam__content__count__title">
                            Số lượng đề
                        </div>
                        <input
                            type="text"
                            className="add-exam__content__count__input"
                            placeholder="Nhập số lượng đề cần tạo"
                        />
                    </div>
                    <div className=" add-exam__bar--2"></div>
                </div>
                <div className="add-exam__chapter-items">
                    {selectChapter.map((item, index) => {
                        return (
                            <div className="add-exam__chapter-item" key={index}>
                                <div className="add-exam__chapter-item__count">
                                    <div className="add-exam__chapter-item__count__title">
                                        {item}:
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Chọn số câu hỏi"
                                        className="add-exam__chapter-item__count__input"
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
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="add-exam__chapter-item">
                    <div className="add-exam__chapter-item__count">
                        <div className="add-exam__chapter-item__count__title">
                            Chương 1:
                        </div>
                        <input
                            type="text"
                            placeholder="Chọn số câu hỏi"
                            className="add-exam__chapter-item__count__input"
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
                            ></input>
                        </div>
                    </div>
                </div> */}
                <div className="add-exam__footer">
                    <input
                        className="add-exam__footer__button"
                        type="submit"
                        value="Thêm"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            <div className="add__button">
                <ButtonBack route={route} />
            </div>
        </div>
    );
}
