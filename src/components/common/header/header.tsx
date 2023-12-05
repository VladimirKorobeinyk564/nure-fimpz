import {Link, useNavigate} from "react-router-dom";

import SearchInput from "../search-input/search-input.tsx";
import ThemeButton from "../theme-button/theme-button.tsx";
import LangSelect from "./lang-select/lang-select.tsx";

import nureLogo from "@/assets/icons/common/nure-logo.svg";
import {useTranslation} from "react-i18next";

function Header() {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <header className={
            ' header-container flex z-10 items-center justify-between fixed w-full px-[25px] h-[80px] border border-solid' +
            ' border-b-[#CCCCCC] bg-light-bg dark:bg-dark-second-bg dark:border-dark-second-bg'
        }>
            <div className="logo-block w-[55px] mr-[20px] cursor-pointer">
                <img src={nureLogo} alt="Nure" onClick={() => navigate("/")} />
            </div>
            <div className="search-block flex-grow">
                <SearchInput
                    inputClass={'rounded-[30px] !py-[12px]'}
                    placeholder={t('common.header.searchText')}
                ></SearchInput >
            </div>
            <div className="control-wrap ml-[20px] w-[350px] flex items-center justify-between">
                <nav className={'text-light-text-color dark:text-dark-text-color inline-flex grow justify-center'}>
                    <Link className={'mx-[15px] font-semibold'} to="/">{t('common.header.nav.home')}</Link>
                    <Link className={'mx-[15px] font-semibold'} to="/docs">{t('common.header.nav.labPz')}</Link>
                </nav>
                <div className="control-block flex ">
                    <ThemeButton></ThemeButton>
                    <LangSelect></LangSelect>
                </div>
            </div>
        </header>
    );
}

export default Header;