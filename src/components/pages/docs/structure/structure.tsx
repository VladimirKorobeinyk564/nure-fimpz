import {useEffect} from "react";
import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/scroll-area";
import {HashLink as Link} from "react-router-hash-link";

import { motion } from "framer-motion"

function Structure() {
    const {t} = useTranslation();

    const {
        menuTreeList,
        selectedMenuTabId,
        selectedStructureTabId
    } = useAppSelector((state) => state.menuTree);

    const selectedTabNodes: MenuItem[] = findMenuItemByKey(selectedMenuTabId, menuTreeList)?.nodes!;

    const menuTreeAction = useActionCreators(menuTreeActions);

    const textXAnimation = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {delay: custom * 0.2, duration: 0.5, ease: "linear"}
        })
    }

    useEffect(() => {
        const locationHash = window.location.hash;
        const firstStructureTab = selectedTabNodes[0];

        if (locationHash === '' && firstStructureTab) {
            selectStructureTab(firstStructureTab)
        } else if (locationHash !== '') {
            const item = selectedTabNodes
                .find(node => node.path === locationHash);

            if (item) menuTreeAction.setSelectedStructureTabId(item.key);
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
        window.location.hash = item.path!;
        // window.history.pushState(null, '', `${window.location.href}${item.path}`);
        menuTreeAction.setSelectedStructureTabId(item.key);
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0.2, once: true }}
            className={'w-[280px] flex flex-col py-[30px] pl-[15px] pr-[0]'}>
            <motion.h3
                custom={1}
                variants={textXAnimation}
                className={'text-[#62656F] mb-[10px]'}>{t('docsPage.structure')}</motion.h3>
            <ScrollArea>
                <ScrollBar className={"hidden"} />
                {selectedTabNodes.map((item, index) => (
                    <motion.div
                        key={item.key}
                        custom={index + 1}
                        variants={textXAnimation}>
                        <Link
                            className={`block decoration-none structure-item cursor-pointer py-[14px] pl-[15px] pr-[30px] rounded-l-[12px] ${item.key === selectedStructureTabId && ' bg-light-tab-bg dark:bg-dark-tab-bg text-[#3175F9]'} `}
                            to={item.path!}
                            smooth
                            onClick={() => selectStructureTab(item)}>
                            {t(item.label)}
                        </Link>
                    </motion.div>
                ))}
            </ScrollArea>
        </motion.div>
    );
}

export default Structure;