import MathJax from 'react-mathjax2'
import React from "react";
import {cn} from "@/lib/utils.ts";

interface MathExpressionProps {
    children: React.ReactNode;
    className?: string;
}

const MathExpression = ({children, className}: MathExpressionProps) => {
    return (
        <div className={cn(`flex justify-center items-center py-[40px] w-full rounded-[15px] bg-[#CDDFFF] dark:bg-[#1F242E] ${className}`)}>
            <MathJax.Context input='ascii'>
                <div className={"text-[#1D4A80] dark:text-[#5890D2] font-bold text-[25px]"}>
                    <MathJax.Node inline>{children}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
};

export default MathExpression;