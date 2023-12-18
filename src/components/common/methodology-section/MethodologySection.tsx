import React from "react";
import {useLocation} from "react-router";

import copyLink from "@/assets/icons/common/copy-link.svg";
import {toast} from "@/components/ui/toast/use-toast.ts";

interface MethodologySectionProps {
    title: string;
    children: React.ReactNode;
    id: string;
    isFirstSection: boolean;
}

const MethodologySection = (props: Readonly<MethodologySectionProps>) => {
    const { title, children, id, isFirstSection } = props;
    const location = useLocation();

    function copyLinkToClipboard(): void {
        let currentURL = window.location.origin + location.pathname;

        if (!currentURL.includes(`#`)) currentURL += `#${id}`;

        navigator.clipboard.writeText(currentURL)
            .then(() => {
                toast({
                    duration: 900,
                    description: "Link to article copied successfully.",
                })
            })
            .catch((err) => {
                console.error('Failed to copy URL to clipboard:', err);
                toast({
                    variant: "destructive",
                    duration: 900,
                    description: "Article link copying error.",
                })
            });
    }

    return (
        <div id={id}>
            <div className="flex max-[1280px]:mb-[20px] max-[1500px]:mb-[22px] mb-[30px] items-center">
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
            <div className={"max-[1280px]:text-[13px] max-[1500px]:text-[17px] text-[18px] leading-[36px]"}>
                {children}
            </div>
        </div>
    );
};

export default MethodologySection;