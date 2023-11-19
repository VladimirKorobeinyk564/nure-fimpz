import React from "react";

import Docs from "@/components/pages/docs/docs.tsx";
import Home from "@/components/pages/home/home.tsx";
import Content from "@/components/pages/docs/content/content.tsx";
import FirstPracticalWork from "@/components/pages/docs/content/pz/pz-1/first-practical-work.tsx";
import SecondPracticalWork from "@/components/pages/docs/content/pz/pz-2/second-practical-work.tsx";
import FirstLaboratoryWork from "@/components/pages/docs/content/lb/lb-1/first-laboratory-work.tsx";
import SecondLaboratoryWork from "@/components/pages/docs/content/lb/lb-2/second-laboratory-work.tsx";
import ThirdLaboratoryWork from "@/components/pages/docs/content/lb/lb-3/third-laboratory-work.tsx";
import PythonLesson from "@/components/pages/docs/content/other/python-lesson/python-lesson.tsx";

export interface IRoutes {
    path: string;
    component: React.ReactNode;
    children?: IRoutes[];
}

export const routes: IRoutes[] = [
    {path: "/", component: <Home/>},
    {
        path: "/docs", component: <Docs/>, children: [
            {
                path: 'pz', component: <Content/>, children: [
                    {path: 'pz-1', component: <FirstPracticalWork/>, children: []},
                    {path: 'pz-2', component: <SecondPracticalWork/>, children: []}
                ]
            },
            {
                path: 'lb', component: <Content/>, children: [
                    {path: 'lb-1', component: <FirstLaboratoryWork/>, children: []},
                    {path: 'lb-2', component: <SecondLaboratoryWork/>, children: []},
                    {path: 'lb-3', component: <ThirdLaboratoryWork/>, children: []}
                ]
            },
            {
                path: 'other', component: <Content/>, children: [
                    {path: 'python-lesson', component: <PythonLesson/>, children: []},
                ]
            }
        ]
    },
    {path: "*", component: <Home/>}
];