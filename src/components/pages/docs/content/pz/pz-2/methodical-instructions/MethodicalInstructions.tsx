import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function MethodicalInstructions() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.methodical.label")}
            id={"methodicalInstructionsPzTwo"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.methodical.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.methodical.textTwo")}</p>
            <p className={"mb-[10px] text-2xl text-center font-serif italic"}>{t("docsPage.content.pz.pz2.methodical.pOne")}</p>
            <p className={"text-2xl text-center font-serif italic"}>{t("docsPage.content.pz.pz2.methodical.pTwo")}</p>
        </MethodologySection>
    )
}

export default MethodicalInstructions;