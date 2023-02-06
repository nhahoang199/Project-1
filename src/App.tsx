import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminRoutes, HomeRoutes, UserRoutes } from "./Routes";
import { AdminLayout, UserLayout } from "./Layout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {AdminRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<AdminLayout Page={Page} />}
                            />
                        );
                    })}
                    {HomeRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                    {UserRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<UserLayout Page={Page} />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
