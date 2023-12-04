import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

export interface MenuTreeState {
    menuTreeList: MenuItem[];
    selectedMenuTabId: string;
    selectedStructureTabId: string;
}