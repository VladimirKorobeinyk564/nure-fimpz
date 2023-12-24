import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";

function ProgramVerificationTemporalLogic() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.main.label")}
            id={"programVerificationTemporalLogic"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                {t("docsPage.content.pz.pz2.main.goal")}
            </MethodologyObjective>
        </MethodologySection>
    )
}

export default ProgramVerificationTemporalLogic;