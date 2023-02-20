import "./index.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import callAPI from "../../../../../../Services/api";
import { useNavigate } from "react-router-dom";

export default function MixModal(props: any) {
    const [inputValue, setInputValue] = useState("");
    let questionData: any[] = props.questionData;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    const handleChangeValue = (event: any) => {
        setInputValue(event.target.value);
    };

    function shuffleArray(array: any[]) {
        let len = array.length,
            currentIndex;
        for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
            let randIndex = Math.floor(Math.random() * (currentIndex + 1));
            var temp = array[currentIndex];
            array[currentIndex] = array[randIndex];
            array[randIndex] = temp;
        }
        console.log(array);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let today = new Date();
        for (let i = 1; i <= Number(inputValue); i++) {
            shuffleArray(questionData);
            await callAPI("exam", "POST", {
                courseId: props.examData.CourseId,
                examName: "De 10" + i,
                examType: props.examData.ExamType,
                dayCreate: today,
                author: props.examData.Author,
                reviewer: props.examData.Reviewer,
            }).then((response: any) => {
                let examIdCreated = response.data[0].Id;
                console.log(examIdCreated);
                questionData.forEach(async (item) => {
                    await callAPI("examQuestion", "POST", {
                        examId: examIdCreated,
                        questionId: item.Id,
                    });
                });
            });
            console.log(i);
        }
        if (Number(inputValue) !== 0) {
            alert("Trộn đề thi thành công");
            let route = "/user/exam/add/lastexams/" + inputValue.toString();
            navigate(route, {
                replace: true,
            });
        }
    };

    return (
        <div
            className="mixmodal"
            style={
                props.isOpenModal === true
                    ? { display: "flex" }
                    : { display: "none" }
            }
        >
            <form className="mixin-wrap">
                <FontAwesomeIcon
                    className="mixin-close-icon"
                    icon={faClose}
                    onClick={props.onClick}
                />
                <label className="mixin-wrap__label">
                    Nhập số đề cần tạo
                    <input
                        type="text"
                        name="exam-mixin"
                        className="mixin-wrap__label__input"
                        placeholder="Nhập số đề"
                        value={inputValue}
                        onChange={handleChangeValue}
                    ></input>
                </label>
                <input
                    type="submit"
                    className="mixin-wrap__submit"
                    value="Trộn đề"
                    onClick={handleSubmit}
                ></input>
            </form>
        </div>
    );
}
