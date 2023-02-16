import {
    faBookOpen,
    faBookmark,
    faBookOpenReader,
    faQuestion,
    faEye,
    faPlus,
    faPen,
    faEraser,
} from "@fortawesome/free-solid-svg-icons";
const NavData = [
    {
        id: 1,
        icon: faBookOpen,
        title: "Môn học",
        path: "/admin/subject",
        userPath: "/user/subject",
    },
    {
        id: 2,
        icon: faBookmark,
        title: "Chương",
        // path: "/admin/subject",
    },
    {
        id: 3,
        icon: faBookOpenReader,
        title: "Đề thi",
        path: "/admin/exam",
        userPath: "/user/exam",
    },
    {
        id: 4,
        icon: faQuestion,
        title: "Câu hỏi",
        // path: "/admin/subject",
    },
];
const UserMenu = [
    {
        id: 1,
        color: "#3084F2",
        title: "Xem",
        description: "Xem danh sách đề thi",
        icon: faEye,
        route: "/admin/subject/getAll",
        userRoute: "/user/exam/getAll",
    },
    {
        id: 2,
        color: "#F29B30",
        title: "Thêm",
        description: "Thêm mới một đề thi",
        icon: faPlus,
        route: "/admin/subject/add",
        userRoute: "/user/exam/add",
    },
    
];


const MenuData = [
    {
        id: 1,
        color: "#3084F2",
        title: "Xem",
        description: "Xem danh sách môn học",
        icon: faEye,
        route: "/admin/subject/getAll",
        userRoute: "/user/exam/getAll",
    },
    {
        id: 2,
        color: "#F29B30",
        title: "Thêm",
        description: "Thêm mới một môn học",
        icon: faPlus,
        route: "/admin/subject/add",
        userRoute: "/user/exam/add",
    },
    {
        id: 3,
        color: "#3FBF77",
        title: "Sửa",
        description: "Sửa thông tin môn học",
        icon: faPen,
        route: "/admin/subject/search/update",
        userRoute: "",
    },
    {
        id: 4,
        color: "#F25749",
        title: "Xóa",
        description: "Xóa môn học khỏi danh sách",
        icon: faEraser,
        route: "/admin/subject/search/delete",
        userRoute: "",
    },
];

const AddData = [
    {
        title: "Tên môn học",
        description: "Nhập tên môn học",
    },
    {
        title: "Mã môn học",
        description: "Nhập mã môn học",
    },
    {
        title: "Mô tả",
        description: "Nhập mô tả",
    },
    {
        title: "Ngày bắt đầu",
        description: "Nhập ngày bắt đầu của môn học",
    },
];

const SubjectData = [
    {
        id: 1,
        title: "Đồ án thiết kế I",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 2,
        title: "Cau truc du lieu",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 3,
        title: "Ky thuat lap trinh",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 4,
        title: "Thong tin so",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 5,
        title: "Ly thuyet mat ma",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 6,
        title: "Vi xu ly",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 7,
        title: "Technical Writing",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 8,
        title: "Giai tich 1",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 9,
        title: "Dai so",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
    {
        id: 10,
        title: "Triet hoc mac Le-nin",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },
];

const ExamData = [
    {
        Id: 1,
        CourseName: "Cau truc du lieu",
        ExamName: "De 101",
        ExamType: "Giua ky",
        DayCreate: "2021-08-09T00:00:00.000Z",
        Author: "Franklin",
        Reviewer: "Selig",
    },
    {
        Id: 2,
        CourseName: "Cau truc du lieu",
        ExamName: "De 102",
        ExamType: "Giua ky",
        DayCreate: "2021-09-15T00:00:00.000Z",
        Author: "Chucho",
        Reviewer: "Alphard",
    },
    {
        Id: 3,
        CourseName: "Cau truc du lieu",
        ExamName: "De 101",
        ExamType: "Cuoi ky",
        DayCreate: "2021-12-10T00:00:00.000Z",
        Author: "Udall",
        Reviewer: "Farris",
    },
    {
        Id: 4,
        CourseName: "Cau truc du lieu",
        ExamName: "De 102",
        ExamType: "Cuoi ky",
        DayCreate: "2021-08-26T00:00:00.000Z",
        Author: "Leupold",
        Reviewer: "Redd",
    },
];

const QuestionsData = [
    {
        Id: 1,
        ChapterId: 1,
        QuestionName:
            "Violent programmes on television may have a bad _____ on children.",
        QuestionLevel: "Easy",
        QuestionWeight: 1,
        QuestionImage: null,
        AnswerA: "affection",
        AnswerB: "pressure",
        AnswerC: "influence",
        AnswerD: "control",
        CorrectAnswer: "A",
    },
    {
        Id: 2,
        ChapterId: 1,
        QuestionName:
            "He has always gone _____ strange hobbies like collecting bottle-tops and inventing secret codes.",
        QuestionLevel: "Easy",
        QuestionWeight: 1,
        QuestionImage: null,
        AnswerA: "into",
        AnswerB: "by",
        AnswerC: "in for",
        AnswerD: "through",
        CorrectAnswer: "B",
    },
    {
        Id: 3,
        ChapterId: 1,
        QuestionName:
            "The local tourist bureau will send you _____ about hotels in the area.",
        QuestionLevel: "Easy",
        QuestionWeight: 1,
        QuestionImage: null,
        AnswerA: "knowledge",
        AnswerB: "information",
        AnswerC: "news",
        AnswerD: "notice",
        CorrectAnswer: "C",
    },
    {
        Id: 4,
        ChapterId: 1,
        QuestionName:
            "The businessman proved to be an apparently well-behaved ______ middle-aged man.",
        QuestionLevel: "Easy",
        QuestionWeight: 1,
        QuestionImage: null,
        AnswerA: "offensive",
        AnswerB: "unoffending",
        AnswerC: "inoffensive",
        AnswerD: "innocent",
        CorrectAnswer: "D",
    },
    {
        Id: 5,
        ChapterId: 1,
        QuestionName:
            "The us eof plastics for shoes _____ of leather has ruined shoe repairing as a business.",
        QuestionLevel: "Normal",
        QuestionWeight: 1,
        QuestionImage: null,
        AnswerA: "although",
        AnswerB: "as well",
        AnswerC: "instead",
        AnswerD: "outside",
        CorrectAnswer: "A",
    },
];

const ChapterData = [
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

const subject = SubjectData[0];

const SubjectInfo = [
    {
        title: "ID",
        data: subject.id,
    },
    {
        title: "Mã môn học",
        data: subject.code,
    },
    {
        title: "Ngày bắt đầu",
        data: subject.date,
    },
    {
        title: "Mô tả",
        data: subject.description,
    },
];


export {
    NavData,
    MenuData,
    AddData,
    SubjectData,
    SubjectInfo,
    ChapterData,
    ExamData,
    QuestionsData,
    UserMenu
};
