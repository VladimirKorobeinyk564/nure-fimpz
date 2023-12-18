import {useEffect} from "react";
import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/scroll-area";
import {HashLink as Link} from "react-router-hash-link";

function Structure() {
    const {t} = useTranslation();

    const {
        menuTreeList,
        selectedMenuTabId,
        selectedStructureTabId
    } = useAppSelector((state) => state.menuTree);

    const selectedTabNodes = findMenuItemByKey(selectedMenuTabId, menuTreeList);

    const menuTreeAction = useActionCreators(menuTreeActions);


    useEffect(() => {
        const locationHash = window.location.hash;
        const firstStructureTab = selectedTabNodes?.nodes[0];

        if (locationHash === '' && firstStructureTab) {
            selectStructureTab(firstStructureTab)
        } else if (locationHash !== '') {
            const item = selectedTabNodes?.nodes
                .find(node => node.path === locationHash);

            if (item) menuTreeAction.setSelectedStructureTabId(item.key);
            window.history.pushState(null, '', window.location.href)
        }
    }, [selectedMenuTabId]);

    function findMenuItemByKey(keyToFind: string, items: MenuItem[]): MenuItem | null {
        for (const item of items) {
            if (item.key === keyToFind) return item;

            if (item.nodes.length > 0) {
                const foundItem = findMenuItemByKey(keyToFind, item.nodes);
                if (foundItem) return foundItem;
            }
        }

        return null;
    }

    function selectStructureTab(item: MenuItem): void {
        menuTreeAction.setSelectedStructureTabId(item.key);
        // if (item.path) setHashToUrl(item.path)
    }

    // function setHashToUrl(path: string): void {
    //     window.history.pushState(null, '', window.location.href + path);
    // }

    return (
        <div className={'w-[280px] flex flex-col py-[30px] pl-[15px] pr-[0]'}>
            <h3 className={'text-[#62656F] mb-[10px]'}>{t('docsPage.structure')}</h3>
            <ScrollArea>
                <ScrollBar className={"hidden"} />
                {selectedTabNodes?.nodes.map(item => (
                    <Link
                        className={`block decoration-none structure-item cursor-pointer py-[14px] pl-[15px] pr-[30px] rounded-l-[12px] ${item.key === selectedStructureTabId && ' bg-light-tab-bg dark:bg-dark-tab-bg text-[#3175F9]'} `}
                        to={item.path!}
                        smooth
                        key={item.key}
                        onClick={() => selectStructureTab(item)}>
                        {t(item.label)}
                    </Link>
                ))}
            </ScrollArea>
        </div>
    );
}

export default Structure;