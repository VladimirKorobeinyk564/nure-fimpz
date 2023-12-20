import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import {useTranslation} from "react-i18next";

const MethodicalForIndependentWorkOfStudents = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.guidelinesForIndependentWork')}
                            id={"methodicalForIndependentWorkOfStudents"} isFirstSection={false}>
            <p>{t('docsPage.content.lb.lb3.guidelinesForIndependentWork.p1')}</p>
        </MethodologySection>
    );
};

export default MethodicalForIndependentWorkOfStudents;