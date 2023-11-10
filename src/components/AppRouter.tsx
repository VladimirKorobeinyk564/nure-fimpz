import {Routes, Route} from "react-router-dom";
import {RouteObject} from "react-router";

import {routes} from "../router";

const AppRouter = () => {
    const getRoutes = (routes: RouteObject[] | undefined) => {
        if (!routes) return null;

        return routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path}>
                {getRoutes(route.children)}
            </Route>
        ));
    };

    return <Routes>{getRoutes(routes)}</Routes>;
};

export default AppRouter;