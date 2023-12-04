import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";
import {useNavigate} from "react-router-dom";

import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

import {menuTreeActions} from "@/store/menuTreeSlice/slice.ts";

function Structure() {
    const menuTreeList = useAppSelector((state) => state.menuTree.menuTreeList);
    const selectedMenuTabId = useAppSelector((state) => state.menuTree.selectedMenuTabId);
    const selectedStructureTabId = useAppSelector((state) => state.menuTree.selectedStructureTabId);
    const selectedTabNodes = findMenuItemByKey(selectedMenuTabId, menuTreeList);

    const menuTreeAction = useActionCreators(menuTreeActions);

    const navigate = useNavigate();

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
        navigate(item.path!)
    }

    return (
        <div className={'w-[280px] flex flex-col py-[30px] pl-[15px] pr-[0]'}>
            <h3 className={'text-[#62656F] mb-[10px]'}>СТРУКТУРА</h3>
            <div className="structure-container">
                {selectedTabNodes?.nodes.map(item => (
                    <a
                        className={`block decoration-none structure-item cursor-pointer py-[14px] pl-[15px] rounded-l-[12px] ${item.key === selectedStructureTabId && 'bg-[#14293D] text-[#0075FF]'} `}
                        href={item.path!}
                        onClick={() => selectStructureTab(item)}>
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Structure;