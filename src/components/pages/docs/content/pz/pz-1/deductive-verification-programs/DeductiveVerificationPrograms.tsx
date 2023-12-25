import {useTranslation} from "react-i18next";


import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function DeductiveVerificationPrograms() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.main.label")}
            id={"deductiveVerificationPrograms"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                {t("docsPage.content.pz.pz1.main.goal")}
            </MethodologyObjective>
        </MethodologySection>
    )
}

export default DeductiveVerificationPrograms;