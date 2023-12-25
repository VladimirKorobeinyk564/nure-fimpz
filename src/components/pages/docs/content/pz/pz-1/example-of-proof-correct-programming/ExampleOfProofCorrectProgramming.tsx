import {useTranslation} from "react-i18next";

import MathJax from 'react-mathjax2'

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";
import List from "@/components/common/list/List.tsx";

function ExampleOfProofCorrectProgramming() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.exampleOfProofCorrectProgramming.label")}
            id={"exampleOfProofCorrectProgrammingPzOne"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li className={"text-2xl mb-[10px]"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}><MathJax.Node inline>{`Pre(x) => Inv(x,y)`}</MathJax.Node></div>
                    </MathJax.Context>
                    <MathExpression
                        children={"n≥0 && i=0 =>  S=sum_(k=0)^(i-1)((a[k])/i)≡S=sum_(k=0)^(-1)((a[k])/0)≡S=0"}/>
                </li>
                <li className={"text-2xl mb-[10px]"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}>
                            <MathJax.Node inline>{`{Inv(x, y)& B} [S(x,y)]{Inv(x,y)}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathExpression className={"pb-0 rounded-b-none"}
                                    children={"{(S=sum_(k=0)^(i-1)((a[k])/i)) && (i<n)}[S=(a[i])/(i+1)+S*i/(i+1);i++;] => S=sum_(k=0)^(i-1)((a[k])/i)"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(a[i])/(i+1)+(sum_(k=0)^(i-1)a[k])/i*i/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(a[i])/(i+1)+(sum_(k=0)^(i-1)a[k])/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(sum_(k=0)^(i)a[k])/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"rounded-t-none"}
                                    children={"S=(sum_(k=0)^(i-1)a[k])/i=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                </li>
                <li className={"text-2xl"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}>
                            <MathJax.Node inline>{`~B & Inv(x, y) -> Post(x,y)`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <p className={"mb-[10px] font-normal text-lg"}>{t("docsPage.content.pz.pz1.exampleOfProofCorrectProgramming.textOne")}</p>
                    <MathExpression children={"(i=n)&&(S=sum_(k=0)^(i-1)(a[k])/i)=>S=sum_(k=0)^(n-1)(a[k])/n"}/>
                    <p className={"my-[10px] font-normal text-lg"}>{t("docsPage.content.pz.pz1.exampleOfProofCorrectProgramming.textTwo")}</p>
                    <p className={"font-normal text-lg"}>{t("docsPage.content.pz.pz1.exampleOfProofCorrectProgramming.textThree")}</p>
                </li>
            </List>
        </MethodologySection>
    )
}

export default ExampleOfProofCorrectProgramming;