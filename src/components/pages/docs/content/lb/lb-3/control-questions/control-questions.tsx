import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import {useTranslation} from "react-i18next";

const ControlQuestions = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.controlQuestionsAndTasks')} id={"controlQuestions"} isFirstSection={false}>
            <List type={"Number"}>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l1')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l2')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l3')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l4')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l5')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l6')}</li>
                <li>{t('docsPage.content.lb.lb3.controlQuestionsAndTasks.l7')}</li>
            </List>
        </MethodologySection>
    );
};

export default ControlQuestions;