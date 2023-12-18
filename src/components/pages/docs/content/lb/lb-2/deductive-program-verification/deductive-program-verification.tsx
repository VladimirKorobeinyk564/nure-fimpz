import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import {useTranslation} from "react-i18next";

function DeductiveProgramVerification() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.main.label')}
            id={"deductiveProgramVerification"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                {t('docsPage.content.lb.lb2.main.goal')}
            </MethodologyObjective>
        </MethodologySection>
    );
}

export default DeductiveProgramVerification;