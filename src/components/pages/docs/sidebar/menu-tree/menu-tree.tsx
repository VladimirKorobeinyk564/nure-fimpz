import {useState} from 'react';

import MenuElement from './menu-element/menu-element.tsx';

import {menuItemsList} from "@/components/pages/docs/sidebar/menu-tree/constants/menuTreeStructure.ts";
import {useNavigate} from "react-router-dom";

export interface MenuItem {
    key: string;
    label: string;
    path: string | null;
    isActive: boolean;
    isNavigate: boolean;
    nodes: MenuItem[];
}


function MenuTree() {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(menuItemsList);

    const navigate = useNavigate();

    function toggleItem(clickedItem: MenuItem): void {
        const updatedItems = menuItems.map(item =>
            item.key === clickedItem.key ? { ...item, isActive: !item.isActive } : item
        );

        setMenuItems(updatedItems);

        const key = clickedItem.key;

        if (clickedItem.path !== null && clickedItem.isNavigate) navigate(clickedItem.path);

        if (expandedItems.includes(key)) {
            setExpandedItems(expandedItems.filter(itemKey => itemKey !== key));
        } else {
            setExpandedItems([...expandedItems, key]);
        }
    }

    const renderMenu = (items: MenuItem[], level = 0) => {
        return items.map((item) =>
            <MenuElement
                item={item}
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