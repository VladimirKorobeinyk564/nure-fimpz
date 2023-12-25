import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import {useTranslation} from "react-i18next";

const TaskStatement = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.problemStatement')}
                            id={"taskStatement"} isFirstSection={false}>
            <p>{t('docsPage.content.other.pythonLesson.problemStatement.p1')}</p>
        </MethodologySection>
    );
};

export default TaskStatement;