import React from "react";

interface MethodologySectionProps {
    title: string;
    children: React.ReactNode;
    id: string;
    isFirstSection: boolean;
}

const MethodologySection = (props: MethodologySectionProps) => {
    const {title, children, id, isFirstSection} = props;
    return (
        <div id={id}>
            {isFirstSection ?
                <h3 className={"text-[40px] font-bold mb-[30px]"}>{title}</h3>
                : <h4 className={"text-[30px] font-bold mb-[30px]"}>{title}</h4>}
            <div className={"text-[18px] leading-[36px]"}>
                {children}
            </div>
        </div>
    );
};

export default MethodologySection;