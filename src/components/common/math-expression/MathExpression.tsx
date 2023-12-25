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
                <div className={"text-[#1D4A80] dark:text-[#5890D2] font-bold text-[25px] max-[1550px]:text-[21px] max-[1408px]:text-[18px] max-[1300px]:text-[16px] max-[1234px]:text-[14px] max-[1160px]:text-[12px] max-[1098px]:text-[10px]"}>
                    <MathJax.Node inline>{children}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
};

export default MathExpression;