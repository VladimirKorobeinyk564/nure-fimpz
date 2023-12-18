import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import {useTranslation} from "react-i18next";

function ReferencesList() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.listOfReferences.label')}
            id={"referencesListLb2"}
            isFirstSection={false}
        >
            <div className="mb-[40px]">
                <List type={'Number'}>
                    <li>KeY Quicktour for JML [{t('docsPage.content.lb.lb2.listOfReferences.eletrResource')}] / Chalmers University of Technology. – {t('docsPage.content.lb.lb2.listOfReferences.accessMode')}:www/URL: <a className={'text-primary-color hover:underline'} href="http://www.key-project.org/down-load/quicktour/quicktour-1.6.zip">http://www.key-project.org/down-load/quicktour/quicktour-1.6.zip</a>{t('docsPage.content.lb.lb2.listOfReferences.year')}</li>
                </List>
            </div>
        </MethodologySection>
    );
}

export default ReferencesList;