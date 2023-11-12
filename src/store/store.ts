import {configureStore} from "@reduxjs/toolkit";

import {systemSettingsReducer} from "./systemSettingsSlice/slice";

export const store = configureStore({
    reducer: {
        systemSettings: systemSettingsReducer,
    }
})

export * from "./systemSettingsSlice/slice";
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;