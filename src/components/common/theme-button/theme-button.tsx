import classes from './theme-button.module.scss';

import lightModeIcon from '@/assets/icons/common/light-icon.svg';
import darkModeIcon from '@/assets/icons/common/dark-icon.svg';

import {ThemeOption} from "@/models/ThemeOption.ts";

interface ThemeButtonProps {
    className?: string;
}

function ThemeButton(props: Readonly<ThemeButtonProps>) {
    const theme = ThemeOption.DARK;

    const getButtonIcon = (source: string) => {
        let currentTheme = source;
        if (source === ThemeOption.SYSTEM) {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return currentTheme === 'dark' ? darkModeIcon : lightModeIcon;
    }

    const changeTheme = () => {
        // if (theme === 'system') {
        //     window.matchMedia('(prefers-color-scheme: dark)').matches ?
        //         systemSettingsAction.changeTheme(ThemeOption.LIGHT) : systemSettingsAction.changeTheme(ThemeOption.DARK);
        // } else if (theme === 'dark') {
        //     systemSettingsAction.changeTheme(ThemeOption.LIGHT)
        // } else {
        //     systemSettingsAction.changeTheme(ThemeOption.DARK)
        // }
    }

    return (
        <button className={`${classes.change_theme_button} ${props.className}`} onClick={changeTheme}>
            <img src={getButtonIcon(theme)} className='invert-0 dark:invert'
                 alt={theme.toString() === ThemeOption.LIGHT ? 'light' : 'dark'}/>
        </button>
    );
}

export default ThemeButton;