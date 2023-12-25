import {useTranslation} from "react-i18next";

import {StreamLanguage} from "@codemirror/language";
import {pascal} from "@codemirror/legacy-modes/mode/pascal";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function ProvingCorrectnessCycle() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.provingCorrectnessCycle.label")}
            id={"provingCorrectnessCycle"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.provingCorrectnessCycle.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.provingCorrectnessCycle.textTwo")}</p>
            <CodeSnippet children={"\n" + "{(Var(x,y)= n) & B} S(x,y){(Var(x,y)= m) & (m < n)}     (1.2)" + "\n"}/>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.provingCorrectnessCycle.textThree")}</p>
            <CodeSnippet lang={[StreamLanguage.define(pascal)]} children={"\nfor(i = 1; i <= n; i++) S(x, y);\n"}/>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.provingCorrectnessCycle.textFour")} <span
                className={"font-bold"}>{t("docsPage.content.pz.pz1.provingCorrectnessCycle.textFive")}</span></p>
        </MethodologySection>
    )
}

export default ProvingCorrectnessCycle;