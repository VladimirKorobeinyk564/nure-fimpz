import {Routes, Route} from "react-router-dom";

import {IRoutes, routes} from "@/router/index.tsx";

const AppRouter = () => {
    const getRoutes = (routes: IRoutes[] | undefined) => {
        if (!routes) return null;

        return routes.map((route: IRoutes) => (
            <Route path={route.path} element={route.component} key={route.path}>
                {getRoutes(route.children)}
            </Route>
        ));
    };

    return <Routes>{getRoutes(routes)}</Routes>;
};

export default AppRouter;