import {useEffect} from 'react';

import MenuElement from './menu-element/menu-element.tsx';

import {menuItemsList} from "@/components/pages/docs/sidebar/menu-tree/constants/menuTreeStructure.ts";
import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";
import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";

import { motion } from "framer-motion"

export interface MenuItem {
    key: string;
    label: string;
    path: string | null;
    isNavigate: boolean;
    parentKey: string | null;
    nodes: MenuItem[];
}

interface MenuTreeProps {
    maxDepth: number;
}

function MenuTree(props: Readonly<MenuTreeProps>) {
    const {maxDepth = Infinity} = props;

    const {menuTreeList} =
        useAppSelector(state => state.menuTree);

    const menuTreeAction = useActionCreators(menuTreeActions);

    const textXAnimation = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {delay: custom * 0.2, duration: 0.5, ease: "linear"}
        })
    }

    useEffect(() => {
        const currentLocation = window.location.pathname;

        activateMenuItems(menuItemsList, extractStrings(currentLocation));
        menuTreeAction.setMenuTree(menuItemsList);

        return () => clearMenuTreeStore();
    }, []);

    function clearMenuTreeStore(): void {
        menuTreeAction.setExpandedItems([]);
        menuTreeAction.setMenuTree([]);
        menuTreeAction.setSelectedMenuTab('');
        menuTreeAction.setSelectedStructureTabId('');
    }

    function activateMenuItems(menuItems: MenuItem[], currentPathArr: string[]): void {
        const activateMenuRecursive = (items: MenuItem[]): void => {
            for (const menuItem of items) {
                if (menuItem.path && currentPathArr.includes(menuItem.path)) {
                    if (!menuItem.parentKey) {
                        menuTreeAction.addExpandedItem([menuItem.key]);
                    }

                    if (currentPathArr[1] === menuItem.path) {
                        menuTreeAction.setSelectedMenuTab(menuItem.key);
                    }

                    if (menuItem.nodes.length > 0) {
                        activateMenuRecursive(menuItem.nodes);
                    }
                }
            }
        };

        activateMenuRecursive(menuItems);
    }

    function extractStrings(url: string): string[] {
        const parts = url.split('/docs/')[1]?.split('/#')[0]?.split('/')
            .filter(part => part !== '');
        return parts || [];
    }

    const renderMenu = (items: MenuItem[], level = 0) => {
        if (level >= maxDepth) return null;

        return items.map((item, index) =>
            <motion.div
                key={item.key}
                custom={index}
                variants={textXAnimation}>
                <MenuElement
                    item={item}
                    maxDepth={maxDepth}
                    level={level}
                    renderMenu={renderMenu}
                ></MenuElement>
            </motion.div>
        );
    };

    return (
        <div>{renderMenu(menuTreeList)}</div>
    );
}

export default MenuTree;