import React from "react";

interface CodeSnippetProps {
    title?: string | undefined;
    children: React.ReactNode;
}

function TerminalSnippet(props: Readonly<CodeSnippetProps>) {
    const {title, children} = props;
    return (
        <div className={'code border border-[#e3e4e5] bg-[#f6f7f9] dark:bg-[#16181d] dark:border-[#444955] rounded-[10px] overflow-hidden mb-[20px]'}>
            {title && (
                <div className="title-block font-medium bg-[#CFD2D8] dark:bg-[#343a46] px-[20px] py-[5px] text-primary-color">
                    {title}
                </div>
            )}
            <div className="max-[1280px]:text-[13px] max-[1500px]:text-[16px] text-[18px] content p-[20px] overflow-scroll">
                <pre>{children}</pre>
            </div>
        </div>
    );
}

export default TerminalSnippet;