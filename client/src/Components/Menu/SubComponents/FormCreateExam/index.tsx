import { useEffect, useState } from "react";
import { ButtonBack } from "../Common";
import callAPI from "../../../../Services/api";
import { IChapterParams } from "../../../../Models";

import {
    FormContentCourse,
    FormContentType,
    FormContentSelectChapter,
    FormChapterItems,
    SubmitButton,
} from "./SubComponents";

import "./index.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function FormExam(props: any) {
    const [selectChapter, setSelectChapter] = useState<any[]>([]);
    const [selectChapterId, setSelectChapterId] = useState<any[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<number>(0);
    const [createdExamId, setCreatedExamId] = useState<number>(0);
    const [courseData, setCourseData] = useState<any>([]);
    const [chapterData, setChapterData] = useState<any[]>([]);
    const [chapterName, setChapterName] = useState("");
    const [questionData, setQuestionData] = useState<any[]>([]);
    const [examType, setExamType] = useState("Giữa kỳ");
    const [reviewer, setReviewer] = useState("");
    const [questionCount, setQuestionCount] = useState();
    const [easyQuestionCount, setEasyQuestionCount] = useState();
    const [mediumQuestionCount, setMediumQuestionCount] = useState();
    const [hardQuestionCount, setHardQuestionCount] = useState();
    const [chapterParams, setChapterParams] = useState<any>({});
    const [route, setRoute] = useState('');

    const navigate = useNavigate();
    // const [chapterParamsArr, setChapterParamsArr] = useState<any[]>();
    let chapterParamsArr: any[] = [];
    useEffect(() => {
        getCourse("courses", "GET");
    }, []);
    useEffect(() => {
        if(createdExamId !== 0) {
            let route = createdExamId.toString();
            navigate(route);
        }
    }, [createdExamId]);
    useEffect(() => {
        getChaptersOfCourse("chapters/&courseId=" + selectedCourse, "GET");
    }, [selectedCourse]);

    const getCourse = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((res: any) => {
                setCourseData(res.data);
                setSelectedCourse(res.data[0].Id);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getChaptersOfCourse = async (endpoint: string, method: string) => {
        try {
            await callAPI(endpoint, method).then((res: any) => {
                setChapterData(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getRandomQuestion = async (endpoint: string, method: string) => {
        try {
            return await callAPI(endpoint, method).then((res: any) => {
                const data = res.data;
                console.log(data);
                Object.values(data).forEach((item) => console.log(item));
            });
        } catch (error) {
            console.log(error);
        }
    };

    const createExam = async (endpoint: string, method: string, body: any) => {
        try {
            return await callAPI(endpoint, method, body).then((res: any) => {
                // setCreatedExamId(res.data[0].Id);
                console.log(res.data[0].Id);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const createExamQuestion = async (
        endpoint: string,
        method: string,
        body: any
    ) => {
        try {
            await callAPI(endpoint, method, body).then((res: any) => {
                console.log(res.data[0].Id);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeCourse = (e: any) => {
        setSelectedCourse(e.target.value);
    };

    const handleChangeType = (e: any) => {
        setExamType(e.target.value);
    };

    const handleClickInputChapter = (value: string) => {
        setChapterName(value);
    };

    const handleChangeReviewer = (e: any) => {
        setReviewer(e.target.value);
    };

    const handleChangeInputChapter = (e: any) => {
        const chapterId = Number(e.target.value);
        if (!e.target.checked) {
            setSelectChapterId(
                selectChapterId.filter((item) => {
                    return item !== chapterId;
                })
            );
            setSelectChapter(
                selectChapter.filter((item) => {
                    return item !== chapterName;
                })
            );
        } else {
            setSelectChapterId(() => [...selectChapterId, chapterId]);
            setSelectChapter(() => [...selectChapter, chapterName]);
        }
    };

    const handleChangeQuestionCount = (e: any, index: number) => {
        // setQuestionCount(e.target.value);

        setChapterParams(() => {
            const newObject = { ...chapterParams };

            newObject[`${index}`] = {
                ...newObject[`${index}`],
                chapterId: selectChapterId[index],
                questionCount: Number(e.target.value),
            };
            return newObject;
        });
    };

    const handleChangeEasyQuestionCount = (e: any, index: number) => {
        // setEasyQuestionCount(e.target.value);
        setChapterParams(() => {
            const newObject = { ...chapterParams };
            //     return newObject;
            newObject[`${index}`] = {
                ...newObject[`${index}`],
                chapterId: selectChapterId[index],
                easyQuestionCount: Number(e.target.value),
            };
            return newObject;
        });
    };
    const handleChangeMediumQuestionCount = (e: any, index: number) => {
        // setMediumQuestionCount(e.target.value);
        setChapterParams(() => {
            const newObject = { ...chapterParams };
            newObject[`${index}`] = {
                ...newObject[`${index}`],
                chapterId: selectChapterId[index],
                mediumQuestionCount: Number(e.target.value),
            };
            return newObject;
        });
    };
    const handleChangeHardQuestionCount = (e: any, index: number) => {
        // setHardQuestionCount(e.target.value);
        setChapterParams(() => {
            const newObject = { ...chapterParams };
            newObject[`${index}`] = {
                ...newObject[`${index}`],
                chapterId: selectChapterId[index],
                hardQuestionCount: Number(e.target.value),
            };
            return newObject;
        });
    };

    const handleSubmit = async function (e: any) {
        e.preventDefault();
        let today = new Date();

        try {
            await callAPI("exam", "POST", {
                courseId: selectedCourse,
                examName: "De 100",
                examType: examType,
                dayCreate: today,
                author: "Tran Nha Hoang",
                reviewer: reviewer,
            }).then((response: any) => {
                let examIdCreated = response.data[0].Id;
                console.log(examIdCreated);
                setCreatedExamId(examIdCreated);
                // route = "user/exam/" + examIdCreated;
                // setRoute("user/exam/" + examIdCreated);
                Object.values(chapterParams).forEach(async (item: any) => {
                    const chapterId = item.chapterId;
                    const questionCount = item.questionCount;
                    const easyQuestionCount = item.easyQuestionCount;
                    const mediumQuestionCount = item.mediumQuestionCount;
                    const hardQuestionCount = item.hardQuestionCount;
                    console.log(item);

                    if (easyQuestionCount !== null || easyQuestionCount > 0) {
                        await callAPI(
                            `randomQuestions/count=${easyQuestionCount}&chapterId=${chapterId}&questionLevel=Easy`,
                            "GET"
                        ).then((response: any) => {
                            Object.values(response.data).forEach(
                                async (item: any) => {
                                    console.log(item);
                                    await callAPI("examQuestion", "POST", {
                                        examId: examIdCreated,
                                        questionId: item.Id,
                                    });
                                }
                            );
                        });
                    }
                    if (
                        mediumQuestionCount !== null ||
                        mediumQuestionCount > 0
                    ) {
                        await callAPI(
                            `randomQuestions/count=${mediumQuestionCount}&chapterId=${chapterId}&questionLevel=Normal`,
                            "GET"
                        ).then((response: any) => {
                            Object.values(response.data).forEach(
                                async (item: any) => {
                                    console.log(item);
                                    await callAPI("examQuestion", "POST", {
                                        examId: examIdCreated,
                                        questionId: item.Id,
                                    });
                                }
                            );
                        });
                    }

                    if (hardQuestionCount !== null || hardQuestionCount > 0) {
                        callAPI(
                            `randomQuestions/count=${hardQuestionCount}&chapterId=${chapterId}&questionLevel=Hard`,
                            "GET"
                        ).then((response: any) => {
                            Object.values(response.data).forEach(
                                async (item: any) => {
                                    console.log(item);
                                    await callAPI("examQuestion", "POST", {
                                        examId: examIdCreated,
                                        questionId: item.Id,
                                    });
                                }
                            );
                        });
                    }

                    const restQuestionsCount =
                        questionCount -
                        (easyQuestionCount +
                            mediumQuestionCount +
                            hardQuestionCount);
                    if (restQuestionsCount > 0) {
                        callAPI(
                            `randomQuestions/count=${restQuestionsCount}&chapterId=${chapterId}&questionLevel=Easy`,
                            "GET"
                        ).then((response: any) => {
                            Object.values(response.data).forEach(
                                async (item: any) => {
                                    console.log(item);
                                    await callAPI("examQuestion", "POST", {
                                        examId: examIdCreated,
                                        questionId: item.Id,
                                    });
                                }
                            );
                        });
                    }
                });
                // navigate(`/user/exam/${examIdCreated}`);
            }).then( () => {
                console.log(createdExamId)
                // navigate("/user/exam/" + createdExamId)
            }
                
            );
        } catch (error) {
            console.log(error);
        }
        //
        // console.log(createdExamId);

        // console.log(questionData);
    };

    // let route = "user/exam/" + createdExamId;

    return (
        <div className="add-exam-wrap">
            {/* <ExamModal /> */}
            <form className="add-exam" >
                <div className="add-exam__title">Tạo đề thi</div>
                <div className="add-exam__bar"></div>
                <div className="add-exam__content">
                    <FormContentCourse
                        data={courseData}
                        handleChangeCourse={handleChangeCourse}
                    />
                    <FormContentType handleChangeType={handleChangeType} />
                    <FormContentSelectChapter
                        chapterData={chapterData}
                        handleChange={handleChangeInputChapter}
                        handleClick={handleClickInputChapter}
                    />
                    <div className="add-exam__content__item add-exam__content__reviewer">
                        <div className="add-exam__content__item__title add-exam__content__reviewer__title">
                            Người phê duyệt
                        </div>
                        <input
                            type="text"
                            className="add-exam__content__reviewer__input"
                            placeholder="Nhập tên người phê duyệt"
                            value={reviewer}
                            onChange={handleChangeReviewer}
                        />
                    </div>
                    <div className=" add-exam__bar--2"></div>
                </div>
                <FormChapterItems
                    handleChangeEasyQuestionCount={
                        handleChangeEasyQuestionCount
                    }
                    handleChangeQuestionCount={handleChangeQuestionCount}
                    handleChangeMediumQuestionCount={
                        handleChangeMediumQuestionCount
                    }
                    handleChangeHardQuestionCount={
                        handleChangeHardQuestionCount
                    }
                    selectChapter={selectChapter}
                    chapterParams={chapterParams}
                    chapterParamsArr={chapterParamsArr}
                />
                <div className="add-exam__footer">
                    <SubmitButton handleSubmit={handleSubmit} createdExamId={createdExamId} />
                </div>
            </form>
            <div className="add__button">
                <ButtonBack />
            </div>
        </div>
    );
}
