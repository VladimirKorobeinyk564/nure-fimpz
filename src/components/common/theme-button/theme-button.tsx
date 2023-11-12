import lightModeIcon from '@/assets/icons/common/light-icon.svg';
import darkModeIcon from '@/assets/icons/common/dark-icon.svg';

import {ThemeOption} from "@/models/ThemeOption.ts";

import {useActionCreators, useAppSelector} from "@/hooks/redux.ts";

import {systemSettingsActions} from "@/store/systemSettingsSlice/slice.ts";

interface ThemeButtonProps {
    className?: string;
}

function ThemeButton(props: Readonly<ThemeButtonProps>) {
    const theme = useAppSelector((state) => state.systemSettings.theme);
    const systemSettingsAction = useActionCreators(systemSettingsActions)

    function getButtonIcon(source: string): string {
        let currentTheme = source;

        if (source === ThemeOption.SYSTEM) {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return currentTheme === 'dark' ? darkModeIcon : lightModeIcon;
    }

    function changeTheme(): void {
        if (theme === 'system') {
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? systemSettingsAction.changeTheme(ThemeOption.LIGHT)
                : systemSettingsAction.changeTheme(ThemeOption.DARK);
        } else if (theme === 'dark') {
            systemSettingsAction.changeTheme(ThemeOption.LIGHT)
        } else {
            systemSettingsAction.changeTheme(ThemeOption.DARK)
        }
    }

    return (
        <button
            className={
            ` hover:bg-theme-hover-bg rounded-[50%] h-[45px] w-[45px] py-[5px] px-[10px]` +
            ` flex items-center justify-center cursor-pointer bg-transparent border-none` +
            ` mr-[10px] transition-all duration-300 outline-none ${props.className}`
            }
            onClick={changeTheme}
        >
            <img
                src={getButtonIcon(theme)} className='w-[25px] invert-0 dark:invert'
                alt={theme.toString() === ThemeOption.LIGHT ? 'light' : 'dark'}
            />
        </button>
    );
}

export default ThemeButton;