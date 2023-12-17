import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import {useTranslation} from "react-i18next";

function QuestionsAndTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.controlQuestionsTasks.label')}
            id={"questionsAndTasksLb2"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>{t('docsPage.content.lb.lb2.controlQuestionsTasks.l1')}</li>
                <li>{t('docsPage.content.lb.lb2.controlQuestionsTasks.l2')}</li>
                <li>{t('docsPage.content.lb.lb2.controlQuestionsTasks.l3')}</li>
                <li>{t('docsPage.content.lb.lb2.controlQuestionsTasks.l4')}</li>
                <li>{t('docsPage.content.lb.lb2.controlQuestionsTasks.l5')}</li>
            </List>
        </MethodologySection>
    );
}

export default QuestionsAndTasks;