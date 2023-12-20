import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective";
import {useTranslation} from "react-i18next";

const ContractProgrammingPython = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.content.other.pythonLesson.main.label')}
                            id={"contractProgrammingPython"} isFirstSection={true}>
            <MethodologyObjective>
                {t('docsPage.content.other.pythonLesson.main.goal')}
            </MethodologyObjective>
        </MethodologySection>
    );
};

export default ContractProgrammingPython;