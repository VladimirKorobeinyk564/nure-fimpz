import {useState} from "react";

import searchIcon from "@/assets/icons/common/search-icon.svg";

interface SearchInputProps {
    placeholder: string;
    searchValue?: string;
    inputClass?: string;
    containerClass?: string;
    onValueChanged?: (value: string) => void;
}

function SearchInput(props: Readonly<SearchInputProps>) {
    const {
        placeholder,
        searchValue,
        inputClass,
        containerClass,
        onValueChanged
    } = props;

    const [value, setValue] = useState<string>(searchValue!);
    const [isFocused, setIsFocused] = useState<boolean>(false);


    return (
        <div
            className={`search-container flex items-center w-full text-[#9AA1B4] ` +
                ` overflow-hidden text-[15px] relative rounded-[8px] ${containerClass} ` +
                ` ${isFocused ? 'active' : ''}`}
        >
            <i
                className={`search-icon mr-[5px] absolute left-[16px] transition-all duration-300`}
                style={{ width: isFocused ? '0px' : '16px' }}
            >
                <img src={searchIcon} alt="Search" />
            </i>
            <input
                className={
                `  transition-[padding] duration-300 search-input py-[6px] outline-none bg-light-input-bg dark:bg-dark-input-bg ` +
                    ` w-full pl-[38px] ${inputClass}`
            }
                type="text"
                style={{ paddingLeft: isFocused ? '16px' : '38px' }}
                placeholder={`${placeholder} ...`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onInput={() => onValueChanged && onValueChanged(value)}
            />
        </div>
    );
}

export default SearchInput;