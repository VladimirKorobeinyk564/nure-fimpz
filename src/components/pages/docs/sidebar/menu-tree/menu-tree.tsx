import {useState} from 'react';

import MenuElement from './menu-element/menu-element.tsx';

import {menuItems} from "@/components/pages/docs/sidebar/menu-tree/constants/menuTreeStructure.ts";
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
    const navigate = useNavigate();

    function toggleItem(item: MenuItem): void {
        const key = item.key;

        if (item.path !== null && item.isNavigate) navigate(item.path);

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