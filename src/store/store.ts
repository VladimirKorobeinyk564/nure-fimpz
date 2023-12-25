import {configureStore} from "@reduxjs/toolkit";

import {systemSettingsReducer} from "./systemSettingsSlice/slice";
import {menuTreeReducer} from "@/store/menuTreeSlice/slice.ts";

export const store = configureStore({
    reducer: {
        systemSettings: systemSettingsReducer,
        menuTree: menuTreeReducer
    }
})

export * from "./systemSettingsSlice/slice";
export * from "./menuTreeSlice/slice";
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;