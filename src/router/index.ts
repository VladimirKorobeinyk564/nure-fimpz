import type { RouteObject } from 'react-router';

import Home from "../components/pages/home/home.tsx";
import Docs from "../components/pages/docs/docs.tsx";

export const routes: RouteObject[] = [
    {path: "/", element: Home()},
    {path: "/docs", element: Docs()},
];