import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import {useTranslation} from "react-i18next";

function ProblemStatement() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.problemStatement.label')}
            id={"problemStatement"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>{t('docsPage.content.lb.lb1.problemStatement.l1')}</li>
                <li>{t('docsPage.content.lb.lb1.problemStatement.l2')}</li>
                <li>{t('docsPage.content.lb.lb1.problemStatement.l3')}</li>
                <li>{t('docsPage.content.lb.lb1.problemStatement.l4')}</li>
            </List>
        </MethodologySection>
    );
}

export default ProblemStatement;