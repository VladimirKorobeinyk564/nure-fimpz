import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function ExampleLtlVerification() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.exampleLtlVer.label")}
            id={"exampleLtlVerification"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.exampleLtlVer.textOne")}</p>
            <p>{t("docsPage.content.pz.pz2.exampleLtlVer.textTwo")}</p>
        </MethodologySection>
    )
}

export default ExampleLtlVerification;