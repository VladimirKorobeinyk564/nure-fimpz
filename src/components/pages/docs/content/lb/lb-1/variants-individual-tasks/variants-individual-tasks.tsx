import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import {useTranslation} from "react-i18next";

function VariantsIndividualTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.variantsIndividualTasks.label')}
            id={"variantsIndividualTasks"}
            isFirstSection={false}
        >
            <List type={'Text'}>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l1')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l2')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l3')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l4')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l5')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l6')}</li>
                <li>{t('docsPage.content.lb.lb1.variantsIndividualTasks.l7')}</li>
            </List>
        </MethodologySection>
    );
}

export default VariantsIndividualTasks;