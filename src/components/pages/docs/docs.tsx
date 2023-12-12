import {useLocation} from "react-router";
import {useEffect} from "react";

import Sidebar from "@/components/pages/docs/sidebar/sidebar.tsx";
import Content from "@/components/pages/docs/content/content.tsx";
import Structure from "@/components/pages/docs/structure/structure.tsx";

import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";

function Docs() {
    const selectedMenuTabId = useAppSelector((state) =>
        state.menuTree.selectedMenuTabId
    );
    const menuTreeAction = useActionCreators(menuTreeActions);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/docs') {
            menuTreeAction.setSelectedMenuTab('');
            menuTreeAction.setSelectedStructureTabId('');
        }
    }, [location.pathname]);

    return (
        <div className={'h-[100vh] pt-[80px] flex'}>
            <Sidebar></Sidebar>
            <div
                className={'pt-[30px] w-[calc(100%-610px)] px-[15px] flex-grow height-[300px] overflow-y-scroll scroll-smooth'}>
                <Content></Content>
            </div>
            {selectedMenuTabId !== '' && (
                <Structure></Structure>
            )}
        </div>
    );
}

export default Docs;