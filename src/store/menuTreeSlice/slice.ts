import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MenuTreeState} from "@/store/menuTreeSlice/types.ts";
import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

const initialState: MenuTreeState = {
    menuTreeList: [],
    expandedItems: [],
    selectedMenuTabId: '',
    selectedStructureTabId: ''
}

const slice = createSlice({
    name: "menuTree",
    initialState,
    reducers: {
        setMenuTree(state, action: PayloadAction<MenuItem[]>): void {
            state.menuTreeList = action.payload;
        },
        setSelectedMenuTab(state, action: PayloadAction<string>): void {
            state.selectedMenuTabId = action.payload;
        },
        setSelectedStructureTabId(state, action: PayloadAction<string>): void {
            state.selectedStructureTabId = action.payload;
        },
        setExpandedItems(state, action: PayloadAction<string[]>): void {
            state.expandedItems = action.payload;
        },
        addExpandedItem(state, action: PayloadAction<string[]>): void {
            state.expandedItems = [...state.expandedItems, ...action.payload];
        },
    }
})

export const {reducer: menuTreeReducer, actions: menuTreeActions} = slice;