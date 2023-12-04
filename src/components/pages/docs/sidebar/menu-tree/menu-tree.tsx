import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import MenuElement from './menu-element/menu-element.tsx';

import {menuItemsList} from "@/components/pages/docs/sidebar/menu-tree/constants/menuTreeStructure.ts";
import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";

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
    const {maxDepth = Infinity} = props;
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const menuItems = useAppSelector((state) => state.menuTree.menuTreeList);
    const menuTreeAction = useActionCreators(menuTreeActions);

    const navigate = useNavigate();

    useEffect(() => {
        menuTreeAction.setMenuTree(menuItemsList);
    }, [])

    function toggleItem(clickedItem: MenuItem): void {
        const updatedItems = menuItems.map(item =>
            item.key === clickedItem.key ? { ...item, isActive: !item.isActive } : item
        );

        menuTreeAction.setMenuTree(updatedItems);

        const key = clickedItem.key;

        if (clickedItem.path !== null && clickedItem.isNavigate) {
            menuTreeAction.setSelectedMenuTab(key);
            menuTreeAction.setSelectedStructureTabId(clickedItem.nodes[0].key)
            navigate(clickedItem.path);
        } else {
            menuTreeAction.setSelectedMenuTab('');
        }

        if (expandedItems.includes(key)) {
            setExpandedItems(expandedItems.filter(itemKey => itemKey !== key));
        } else {
            setExpandedItems([...expandedItems, key]);
        }
    }

    const renderMenu = (items: MenuItem[], level = 0) => {
        if (level >= maxDepth) return null;

        return items.map((item) =>
            <MenuElement
                key={item.key}
                item={item}
                maxDepth={maxDepth}
                level={level}
                expandedItems={expandedItems}
                toggleItem={toggleItem}
                renderMenu={renderMenu}
            ></MenuElement>
        );
    };

    return (
        <div>{renderMenu(menuItems)}</div>
    );
}

export default MenuTree;