import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ThemeOption} from "@/models/ThemeOption";
import {SystemSettingsState} from "./types";

const initialState: SystemSettingsState = {
    theme: ThemeOption.SYSTEM,
}

const slice = createSlice({
    name: "systemSettings",
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<ThemeOption>) {
            let newTheme: ThemeOption = action.payload;

            if (newTheme === ThemeOption.SYSTEM) {
                newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeOption.DARK : ThemeOption.LIGHT;
            }

            const root = window.document.documentElement;
            root.classList.remove(newTheme === ThemeOption.DARK ? ThemeOption.LIGHT : ThemeOption.DARK);
            root.classList.add(newTheme);

            localStorage.setItem('theme', action.payload);
            state.theme = action.payload;
        },
    }
})

export const {reducer: systemSettingsReducer, actions: systemSettingsActions} = slice;