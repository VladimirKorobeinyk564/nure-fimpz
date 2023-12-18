import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import {useTranslation} from "react-i18next";

function ReferencesList() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.listOfReferences.label')}
            id={"referencesList"}
            isFirstSection={false}
        >
            <div className="mb-[40px]">
                <List type={'Number'}>
                    <li>Gary T. Leavens, Yoonsik Cheon. Design by Contract with JML. (Draft tutorial for JML in PDF format) [{t('docsPage.content.lb.lb1.listOfReferences.eletrResource')}] / JML Home Page. – {t('docsPage.content.lb.lb1.listOfReferences.accessMode')}:www/URL: <a className={'text-primary-color hover:underline'} href={'http://www.jmlspecs.org/jmldbc.pdf'}>http://www.jmlspecs.org/jmldbc.pdf</a>{t('docsPage.content.lb.lb1.listOfReferences.year')}</li>
                    <li>David R. Cok The OpenJML User Guide. Draft in progress [{t('docsPage.content.lb.lb1.listOfReferences.eletrResource')}] / GrammaTech, Inc. – {t('docsPage.content.lb.lb1.listOfReferences.accessMode')}:www/URL: <a className={'text-primary-color hover:underline'} href={'http://jmlspecs.source-forge.net/OpenJMLUserGuide.pdf'}>http://jmlspecs.source-forge.net/OpenJMLUserGuide.pdf</a>{t('docsPage.content.lb.lb1.listOfReferences.year')}</li>
                    <li>JML Eclipse [{t('docsPage.content.lb.lb1.listOfReferences.eletrResource')}] / Geeknet, Inc. – {t('docsPage.content.lb.lb1.listOfReferences.accessMode')}:www/URL: <a className={'text-primary-color hover:underline'} href={'http://sourceforge.net/apps/trac/jmlspecs/wiki/JmlEclipse'}>http://sourceforge.net/apps/trac/jmlspecs/wiki/JmlEclipse</a>{t('docsPage.content.lb.lb1.listOfReferences.year')}</li>
                </List>
            </div>
        </MethodologySection>
    );
}

export default ReferencesList;