import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function StepsOfProof() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.stepsOfProof.label")}
            id={"stepsOfProof"}
            isFirstSection={false}
        >
            <CodeSnippet children={"\n" + "Inv(x, y) & ! B ==> Post(x, y)" + "\n"}/>
            <List type={"Number"}>
                <li><CodeSnippet children={"\n" + "Pre(x) -> Inv(x,y)" + "\n"}/></li>
                <li><CodeSnippet children={"\n" + "{Inv(x, y)& B} S(x,y){Inv(x,y)}" + "\n"}/></li>
                <li><CodeSnippet children={"\n" + "~B & Inv(x, y) -> Post(x,y)" + "\n"}/></li>
            </List>
            <p className={'mb-[10px]'}>{t("docsPage.content.pz.pz1.stepsOfProof.pTitle")}</p>
            <List type={"Text"}>
                <li>
                    <span className={"font-bold"}>{t("docsPage.content.pz.pz1.stepsOfProof.pTitleOne")} </span>
                    {t("docsPage.content.pz.pz1.stepsOfProof.pOne")}
                </li>
                <li>
                    <span className={"font-bold"}>{t("docsPage.content.pz.pz1.stepsOfProof.pTitleTwo")} </span>
                    {t("docsPage.content.pz.pz1.stepsOfProof.pTwo")}
                </li>
            </List>
        </MethodologySection>
    )
}

export default StepsOfProof;