import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import {useTranslation} from "react-i18next";

const ControlQuestions = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.controlQuestions')}
                            id={"controlQuestions"} isFirstSection={false}>
            <List type={"Number"}>
                <li>{t('docsPage.content.other.pythonLesson.controlQuestions.l1')}</li>
                <li>{t('docsPage.content.other.pythonLesson.controlQuestions.l2')}</li>
                <li>{t('docsPage.content.other.pythonLesson.controlQuestions.l3')}</li>
            </List>
        </MethodologySection>
    );
};

export default ControlQuestions;