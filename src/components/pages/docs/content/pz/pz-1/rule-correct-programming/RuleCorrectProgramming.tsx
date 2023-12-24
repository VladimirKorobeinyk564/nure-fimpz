import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function RuleCorrectProgramming() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.ruleCorrectProgramming.label")}
            id={"ruleCorrectProgramming"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.ruleCorrectProgramming.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.ruleCorrectProgramming.textTwo")}</p>
            <p>{t("docsPage.content.pz.pz1.ruleCorrectProgramming.textThree")}</p>
        </MethodologySection>
    )
}

export default RuleCorrectProgramming;