import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import {useTranslation} from "react-i18next";

function VariantsIndividualTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.variantsIndividualTasks.label')}
            id={"variantsIndividualTasksLb2"}
            isFirstSection={false}
        >
            <List type={'Text'}>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l1')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l2')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l3')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l4')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l5')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l6')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l7')}</li>
                <li>{t('docsPage.content.lb.lb2.variantsIndividualTasks.l8')}</li>
            </List>
        </MethodologySection>
    );
}

export default VariantsIndividualTasks;