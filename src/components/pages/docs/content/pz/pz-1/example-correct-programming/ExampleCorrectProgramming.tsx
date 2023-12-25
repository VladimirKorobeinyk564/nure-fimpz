import {useTranslation} from "react-i18next";

import MathJax from "react-mathjax2";
import {StreamLanguage} from "@codemirror/language";
import {pascal} from "@codemirror/legacy-modes/mode/pascal";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";

function ExampleCorrectProgramming() {
    const {t} = useTranslation();

    const code = `
S=0
for(int i=0; i<n ; i++)
  S = S*i/(i+1)+a[i]/(i+1);
    `
    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.exampleCorrectProgramming.label")}
            id={"exampleCorrectProgramming"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.exampleCorrectProgramming.textOne")}</p>
            <CodeSnippet lang={[StreamLanguage.define(pascal)]} children={code}/>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.exampleCorrectProgramming.textTwo")}</p>
            <div className={"mb-[10px] flex"}>
            <span className={"mr-1"}>{t("docsPage.content.pz.pz1.exampleCorrectProgramming.textThree")}</span>
                <MathJax.Context input='ascii'>
                    <div>
                        <MathJax.Node>{`Pre(S,n,i): S=0 && n ≥ 0 && i=0`}</MathJax.Node>
                    </div>
                </MathJax.Context>
            </div>
            <MathExpression className={"pb-0 rounded-b-none"} children={"Post(S,a,n): S=sum_(k=0)^(n-1)((a[k])/n)"}/>
            <MathExpression className={"rounded-t-none"} children={"Inv(S,a,i): S=sum_(k=0)^(i-1)((a[k])/i)"}/>
        </MethodologySection>
    )
}

export default ExampleCorrectProgramming;