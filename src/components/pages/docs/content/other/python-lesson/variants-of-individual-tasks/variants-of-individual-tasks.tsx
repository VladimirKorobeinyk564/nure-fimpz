import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import {useTranslation} from "react-i18next";

const VariantsOfIndividualTasks = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.individualTasks')}
                            id={"variantsOfIndividualTasks"} isFirstSection={false}>
            <List type={"Text"}>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l1')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l2')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l3')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l4')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l5')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l6')}</li>
                <li>{t('docsPage.content.other.pythonLesson.individualTasks.l7')}</li>
            </List>
        </MethodologySection>
    );
};

export default VariantsOfIndividualTasks;