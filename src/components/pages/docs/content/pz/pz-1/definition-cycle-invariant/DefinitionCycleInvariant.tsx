import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function DefinitionCycleInvariant() {
    const {t} = useTranslation();

    const code = `
{Inv(x, y)& B}S(x,y){Inv(x,y)}
   `

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.definingCycleInvariant.label")}
            id={"definitionCycleInvariant"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.definingCycleInvariant.textOne")}</p>
            <CodeSnippet children={code}/>
            <p>{t("docsPage.content.pz.pz1.definingCycleInvariant.textTwo")}</p>
        </MethodologySection>
    )
}

export default DefinitionCycleInvariant;