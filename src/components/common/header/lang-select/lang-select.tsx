import {useTranslation} from "react-i18next";

function LangSelect() {
    const  {i18n} = useTranslation();

    return (
        <select
            className={`bg-transparent outline-none cursor-pointer text-[15px] font-medium text-light-text-color dark:bg-dark-primary dark:text-dark-text-color`}
            name="language"
            id="lang"
            onChange={(e) => i18n.changeLanguage(e.target.value.toLowerCase())}
            value={localStorage.getItem("i18nextLng")?.toUpperCase()}
        >
            <option value="EN">EN</option>
            <option value="UA">UA</option>
        </select>
    );
}

export default LangSelect;