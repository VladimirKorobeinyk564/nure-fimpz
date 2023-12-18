import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective";
import {useTranslation} from "react-i18next";

const ProgramVerificationBasedOnTemporalLogic = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.content.lb.lb3.main.label')}
                            id={"programVerificationBasedOnTemporalLogic"} isFirstSection={true}>
            <MethodologyObjective>
                {t('docsPage.content.lb.lb3.main.goal')}
            </MethodologyObjective>
        </MethodologySection>
    );
};

export default ProgramVerificationBasedOnTemporalLogic;