import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function HowChooseInvariants() {
    const {t} = useTranslation();

    const code = `
Inv(x, z) & ! B ==> Post(x, z)x     (1.1)
    `
    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.howChooseInvariants.label")}
            id={"howChooseInvariants"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.howChooseInvariants.textOne")}</p>
            <p className={"mb-[10px] font-bold"}>{t("docsPage.content.pz.pz1.howChooseInvariants.textTwo")}</p>
            <CodeSnippet children={code}/>
        </MethodologySection>
    )
}

export default HowChooseInvariants;