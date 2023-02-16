import Menu from "../Components/Menu";
import { HomePage, UserLayout } from "../Layout";
import {
    FormAdd,
    Update,
    Search,
    View,
    FormExam,
    ExamQuestion,
    ExamModal,
    QuestionInfo
} from "../Components/Menu/SubComponents";
import ExamList from "../Components/Menu/SubComponents/ExamList";
const AdminRoutes = [
    {
        path: "/admin/subject",
        component: Menu,
    },
    {
        path: "/admin/subject/getAll",
        component: View,
    },
    {
        path: "/admin/subject/add",
        component: FormAdd,
    },
    {
        path: "/admin/subject/getAll/:id",
        component: Update,
    },
    {
        path: "/admin/subject/search/:component",
        component: Search,
    },
];
const HomeRoutes = [
    {
        path: "/",
        component: HomePage,
    },
];
const UserRoutes = [
    {
        path: "/user/exam",
        component: Menu,
    },
    {
        path: "/user/exam",
        component: Menu,
    },
    {
        path: "/user/exam/getAll",
        component: ExamList,
    },
    {
        path: "/user/exam/add",
        component: FormExam,
    },
    {
        path: "/user/examQuetions/:id",
        component: ExamQuestion,
    },
    {
        path: "/user/exam/add/:id",
        component: ExamModal,
    },
    {
        path: "/user/question/:id",
        component: QuestionInfo,
    },

];

export { AdminRoutes, HomeRoutes, UserRoutes };
