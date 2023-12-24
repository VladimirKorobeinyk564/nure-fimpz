import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function BuhiAutomaton() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.buhiAutomaton.label")}
            id={"buhiAutomaton"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}><span className={"font-bold"}>{t("docsPage.content.pz.pz2.buhiAutomaton.label")}</span> {t("docsPage.content.pz.pz2.buhiAutomaton.textOne")}</p>
            <p>{t("docsPage.content.pz.pz2.buhiAutomaton.textTwo")}</p>
        </MethodologySection>
    )
}

export default BuhiAutomaton;