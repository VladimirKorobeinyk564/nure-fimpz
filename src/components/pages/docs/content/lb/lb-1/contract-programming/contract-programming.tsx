import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import {useTranslation} from "react-i18next";

function ContractProgramming() {
    const {t} = useTranslation();
    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.main.label')}
            id={"contractProgramming"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                {t('docsPage.content.lb.lb1.main.goal')}
            </MethodologyObjective>
        </MethodologySection>
    );
}

export default ContractProgramming;