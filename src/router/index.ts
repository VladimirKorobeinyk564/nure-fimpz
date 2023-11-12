import React from "react";

import Docs from "@/components/pages/docs/docs.tsx";
import Home from "@/components/pages/home/home.tsx";

export interface IRoutes {
    path: string;
    component: React.ReactNode;
    children?: IRoutes[];
}

export const routes: IRoutes[] = [
    {path: "/", component: <Home />},
    {path: "/docs", component: <Docs />},
];