import Main from "../components/pages/main/main";
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
    {path: "/", element: Main()},
];