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
        icon: faBookOpen,
        title: "Môn học",
    },
    {
        icon: faBookmark,
        title: "Chương",
    },
    {
        icon: faBookOpenReader,
        title: "Đề thi",
    },
    {
        icon: faQuestion,
        title: "Câu hỏi",
    },
];

const MenuData = [
    {   
        id: 1,
        color: "#3084F2",
        title: "Xem",
        description: "Xem danh sách môn học",
        icon: faEye,
        route: "/admin/subject/getAll"
    },
    {
        id: 2,
        color: "#F29B30",
        title: "Thêm",
        description: "Thêm mới một môn học",
        icon: faPlus,
        route: "/admin/subject/add"
    },
    {
        id: 3,
        color: "#3FBF77",
        title: "Sửa",
        description: "Sửa thông tin môn học",
        icon: faPen,
        route: "/admin/subject/search/update"
    },
    {
        id: 4,
        color: "#F25749",
        title: "Xóa",
        description: "Xóa môn học khỏi danh sách",
        icon: faEraser,
        route: "/admin/subject/search/delete"
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
    },{
        id: 5,
        title: "Ly thuyet mat ma",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },{
        id: 6,
        title: "Vi xu ly",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },{
        id: 7,
        title: "Technical Writing",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam etLorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et",
        date: "05/Jan/2021",
        code: "ET3290",
    },{
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

const ChapterData  = [
    {
        stt: "I",
        name: "Tổng quan",
    },
    {
        stt: "II",
        name: "Mở đầu",
    },
    {
        stt: "III",
        name: "Giữa",
    },
    {
        stt: "IV",
        name: "Kết thúc",
    },
];
export { NavData, MenuData, AddData, SubjectData, SubjectInfo, ChapterData };
