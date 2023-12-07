import React from "react";

import copyLink from "@/assets/icons/common/copy-link.svg";

interface MethodologySectionProps {
    title: string;
    children: React.ReactNode;
    id: string;
    isFirstSection: boolean;
}

const MethodologySection = (props: Readonly<MethodologySectionProps>) => {
    const { title, children, id, isFirstSection } = props;

    function copyLinkToClipboard(): void {
        const currentURL = window.location.href;

        navigator.clipboard.writeText(currentURL + `#${id}`)
            .then(() => {
                console.log('URL copied to clipboard:', currentURL);
                // You can add a notification or any other feedback here upon successful copy
            })
            .catch((err) => {
                console.error('Failed to copy URL to clipboard:', err);
                // Handle error, show user a message, etc.
            });
    }

    return (
        <div id={id}>
            <div className="flex mb-[30px] items-center">
                {isFirstSection ?
                    <h3 className={"text-[40px] font-bold"}>{title}</h3>
                    : <h4 className={"text-[30px] font-bold"}>{title}</h4>}
                <button
                    className={'ml-[14px] w-[30px] p-[6px] h-[30px] cursor-pointer rounded-[6px] hover:bg-[rgba(64,71,86,0.1)]'}
                    onClick={copyLinkToClipboard}
                >
                    <img src={copyLink} alt="Copy link"/>
                </button>
            </div>
            <div className={"text-[18px] leading-[36px]"}>
                {children}
            </div>
        </div>
    );
};

export default MethodologySection;