import {BrowserRouter as Router} from "react-router-dom";
import {useEffect} from "react";
import {useActionCreators} from "@/hooks/redux.ts";
import './i18n.ts'

import AppRouter from "./components/AppRouter.tsx";
import Header from "./components/common/header/header.tsx";

import {systemSettingsActions} from "@/store/systemSettingsSlice/slice.ts";

import {ThemeOption} from "@/models/ThemeOption.ts";

function App() {
    const systemSettingsAction = useActionCreators(systemSettingsActions);

    useEffect(() => {
        const theme= localStorage.getItem('theme');

        if (theme !== null) {
            systemSettingsAction.changeTheme(
                ThemeOption[theme.toUpperCase() as keyof typeof ThemeOption]
            );
        }
        if (theme === null) {
            systemSettingsAction.changeTheme(ThemeOption.SYSTEM);
        }
    });

    return (
        <div className="light-bg dark:bg-dark-bg overflow-hidden">
            <Router>
                <Header></Header>
                <AppRouter />
            </Router>
        </div>
    );
}

export default App;
