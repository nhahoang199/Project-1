import Menu from "../Components/Menu";
import { HomePage, UserLayout } from "../Layout";
import { FormAdd, Update, Search, View } from "../Components/Menu/SubComponents";

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
        path: "/user",
        component: UserLayout,
    },
];

export { AdminRoutes, HomeRoutes, UserRoutes };