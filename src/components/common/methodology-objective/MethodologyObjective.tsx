import React from "react";
import {useTranslation} from "react-i18next";

interface MethodologyObjectiveProps {
    children: React.ReactNode;
}

const MethodologyObjective = ({children}: MethodologyObjectiveProps) => {
    const {t} = useTranslation();

    return (
        <div className={"flex flex-col justify-center mb-[40px] px-[30px] py-[25px] rounded-[15px] bg-[#F2FDFA] text-[18px] border-[1px] border-[#E1E7E5] dark:bg-[#26353A] dark:border-[#233134]"}>
            <div className={"flex gap-[15px] items-center mb-[15px]"}>
                <svg width="18" height="18" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.08018 2.89713C7.15682 0.965712 7.69513 0 8.49999 0C9.30486 0 9.84316 0.965703 10.9198 2.89712L11.1983 3.3968C11.5043 3.94565 11.6572 4.22008 11.8958 4.40114C12.1343 4.58221 12.4313 4.64942 13.0255 4.78385L13.5664 4.90623C15.6571 5.37928 16.7025 5.61581 16.9512 6.41558C17.1999 7.21532 16.4873 8.04875 15.0619 9.71543L14.6932 10.1466C14.2881 10.6203 14.0856 10.8571 13.9945 11.1501C13.9034 11.4431 13.934 11.759 13.9952 12.391L14.051 12.9663C14.2665 15.19 14.3742 16.3019 13.7231 16.7962C13.072 17.2905 12.0932 16.8398 10.1356 15.9385L9.62921 15.7053C9.07298 15.4492 8.79486 15.3211 8.49999 15.3211C8.20513 15.3211 7.92701 15.4492 7.37077 15.7053L6.86434 15.9385C4.90677 16.8398 3.928 17.2905 3.27688 16.7962C2.62575 16.3019 2.7335 15.19 2.94899 12.9663L3.00473 12.391C3.06597 11.759 3.09659 11.4431 3.00548 11.1501C2.91438 10.8571 2.71186 10.6203 2.30683 10.1466L1.93808 9.71543C0.512763 8.04875 -0.199901 7.21532 0.0488086 6.41558C0.297518 5.61581 1.34288 5.37928 3.43361 4.90623L3.9745 4.78385C4.56862 4.64942 4.86568 4.58221 5.10419 4.40114C5.34271 4.22008 5.4957 3.94565 5.80164 3.3968L6.08018 2.89713Z"
                        className="fill-[#2A6F63] dark:fill-[#44AC99]"/>
                </svg>
                <p className={"font-bold leading-none text-[#2A6F63] dark:text-[#44AC99]"}>{t('docsPage.content.goalLesson')}</p>
            </div>
            <p>{children}</p>
        </div>
    );
};

export default MethodologyObjective;