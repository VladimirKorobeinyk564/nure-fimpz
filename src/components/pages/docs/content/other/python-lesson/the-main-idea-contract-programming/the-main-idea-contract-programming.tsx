import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import {useTranslation} from "react-i18next";

const TheMainIdeaContractProgramming = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.mainIdeaContractProgramming')}
                            id={"theMainIdeaContractProgramming"} isFirstSection={false}>
            <p>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.p1')}</p>
            <List type={"Text"}>
                <li>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l1')}</li>
                <li>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l2')}</li>
                <li>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l3')}</li>
            </List>
            <p>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.p2')}</p>
            <p>{t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.p3')}</p>
            <List type={"Text"}>
                <li>PyContracts - <a href={"https://pypi.org/project/PyContracts3/3.0.2/"} className={"text-primary-color"}>https://pypi.org/project/PyContracts3/3.0.2/</a>. {t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l4')} - Jul 13, 2020</li>
                <li>dpcontracts - <a href={"https://pypi.org/project/dpcontracts/"} className={"text-primary-color"}>https://pypi.org/project/dpcontracts/</a>. {t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l4')} - 2018 {t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l5')}</li>
                <li>icontract - <a href={"https://pypi.org/project/icontract/"} className={"text-primary-color"}>https://pypi.org/project/icontract/</a>. {t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l4')} - 2022 {t('docsPage.content.other.pythonLesson.mainIdeaContractProgramming.l5')}</li>
            </List>
        </MethodologySection>
    );
};

export default TheMainIdeaContractProgramming;