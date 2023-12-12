import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";
import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";

interface MenuItemProps {
    item: MenuItem;
    level: number;
    renderMenu: (items: MenuItem[], level?: number) => JSX.Element[] | null;
    maxDepth: number;
}

function MenuElement(props: Readonly<MenuItemProps>) {
    const {item, level, renderMenu, maxDepth} = props;

    const {t} = useTranslation();
    const navigate = useNavigate();

    const menuTreeAction = useActionCreators(menuTreeActions);

    const {
        menuTreeList,
        expandedItems,
        selectedMenuTabId
    } = useAppSelector((state) => state.menuTree);

    function toggleMenuItem(clickedItem: MenuItem): void {
        const clickedItemKey = clickedItem.key;

        if (clickedItem.isNavigate) navigateTo(clickedItem);

        if (!clickedItem.parentKey) expandItem(clickedItemKey);
    }

    function navigateTo(clickedItem: MenuItem): void {
        const clickedItemKey = clickedItem.key;
        const navigatePath = buildPathToChild(clickedItemKey, menuTreeList);

        menuTreeAction.setSelectedMenuTab(clickedItemKey);

        if (navigatePath) navigate(`/docs${navigatePath}/`);
    }

    function buildPathToChild(
        clickedItemKey: string, menuItems: MenuItem[], currentPath: string = ''
    ): string | null {
        for (const menuItem of menuItems) {
            const path = getCurrentPath(menuItem, currentPath);
            let foundPath = checkForKeyAndReturnPath(menuItem, clickedItemKey, path);

            if (foundPath) return foundPath;

            if (menuItem.nodes.length > 0) {
                foundPath = buildPathToChild(clickedItemKey, menuItem.nodes, path);
                if (foundPath) return foundPath;
            }
        }
        return null;
    }

    function getCurrentPath(menuItem: MenuItem, currentPath: string): string {
        const menuItemPath =  menuItem.path;

        if (menuItemPath) {
            return currentPath === '' ? menuItemPath : `${currentPath}/${menuItemPath}`;
        }

        return currentPath;
    }

    function checkForKeyAndReturnPath(
        menuItem: MenuItem, clickedItemKey: string, currentPath: string
    ): string | null {
        return menuItem.key === clickedItemKey
            ? `/${currentPath}`
            : null;
    }

    function expandItem(clickedItemKey: string): void {
        if (expandedItems.includes(clickedItemKey)) {
            menuTreeAction.setExpandedItems(expandedItems
                .filter(itemKey => itemKey !== clickedItemKey)
            );
        } else {
            menuTreeAction.setExpandedItems([...expandedItems, clickedItemKey]);
        }
    }

    return (
        <div key={item.key} style={{paddingLeft: `${10 * level}px`}}
             className={cn(`menu-item pr-[10px] cursor-pointer select-none rounded-r-[12px] text-light-second-text-color dark:text-dark-second-text-color font-normal`, item.key === selectedMenuTabId && 'bg-light-tab-bg dark:bg-dark-tab-bg !text-[#3175F9]', level === 0 && 'text-light-text-color dark:text-dark-text-color font-bold')}>
            <div className="flex items-center justify-between h-[50px]" onClick={() => toggleMenuItem(item)}>
                <p className={'pl-[30px]'}>{t(item.label)}</p>
                {item.nodes.length > 0 && level != maxDepth - 1 && (
                    <div className={`transition-transform duration-300 ${expandedItems.includes(item.key) ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`}>
                        <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.00579834" y="1.93604" width="2.34743" height="10.7982" rx="1.17372"
                                  transform="rotate(-45 0.00579834 1.93604)" className={'fill-[#23272F] dark:fill-[#EBECF0]'} />
                            <rect x="13.9322" y="-0.0057373" width="2.34743" height="11.226" rx="1.17372"
                                  transform="rotate(45 13.9322 -0.0057373)" className={'fill-[#23272F] dark:fill-[#EBECF0]'} />
                        </svg>
                    </div>
                )}
            </div>
            {expandedItems.includes(item.key) && item.nodes.length > 0 && renderMenu(item.nodes, level + 1)}
        </div>
    );
}

export default MenuElement;