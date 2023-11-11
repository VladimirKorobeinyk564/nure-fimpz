import {Link, useNavigate} from "react-router-dom";

import SearchInput from "../search-input/search-input.tsx";
import ThemeButton from "../theme-button/theme-button.tsx";
import LangSelect from "./lang-select/lang-select.tsx";

import nureLogo from "assets/icons/common/nure-logo.svg";

function Header() {
    const navigate = useNavigate();

    return (
        <header className={'header-container flex z-10 items-center justify-between fixed w-full px-[25px] h-[80px] bg-dark-second-bg'}>
            <div className="logo-block w-[55px] mr-[20px] cursor-pointer">
                <img src={nureLogo} alt="Nure" onClick={() => navigate("/")} />
            </div>
            <div className="search-block flex-grow">
                <SearchInput
                    inputClass={'rounded-[30px] !py-[12px]'}
                    placeholder={'Search'}
                ></SearchInput >
            </div>
            <div className="control-wrap ml-[20px] w-[350px] flex items-center justify-between">
                <nav className={'text-dark-text-color inline-flex '}>
                    <Link className={'mx-[15px] font-semibold'} to="/">Головна</Link>
                    <Link className={'mx-[15px] font-semibold'} to="/docs">Лаб & практ</Link>
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