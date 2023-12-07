import {useEffect} from 'react';

import MenuElement from './menu-element/menu-element.tsx';

import {menuItemsList} from "@/components/pages/docs/sidebar/menu-tree/constants/menuTreeStructure.ts";
import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";
import {useLocation} from "react-router";

export interface MenuItem {
    key: string;
    label: string;
    path: string | null;
    isActive: boolean;
    isNavigate: boolean;
    nodes: MenuItem[];
}

interface MenuTreeProps {
    maxDepth: number;
}

function MenuTree(props: Readonly<MenuTreeProps>) {
    const location = useLocation();

    const {maxDepth = Infinity} = props;

    const menuItems = useAppSelector((state) => state.menuTree.menuTreeList);

    const menuTreeAction = useActionCreators(menuTreeActions);

    useEffect(() => {
        if (location.pathname !== '/docs') {
            const selectedMenuTab = sessionStorage.getItem('selectedMenuTab');
            const selectedStructureTabId = sessionStorage.getItem('selectedStructureTabId');

            if (selectedMenuTab && selectedStructureTabId) {
                menuTreeAction.setSelectedMenuTab(selectedMenuTab);
                menuTreeAction.setSelectedStructureTabId(selectedStructureTabId);
            }
        }

        menuTreeAction.setMenuTree(menuItemsList);
    }, []);

    const renderMenu = (items: MenuItem[], level = 0) => {
        if (level >= maxDepth) return null;

        return items.map((item) =>
            <MenuElement
                key={item.key}
                item={item}
                maxDepth={maxDepth}
                level={level}
                renderMenu={renderMenu}
            ></MenuElement>
        );
    };

    return (
        <div>{renderMenu(menuItems)}</div>
    );
}

export default MenuTree;