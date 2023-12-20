import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import {useTranslation} from "react-i18next";

const PyContractsPackage = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.pyContractsPackage')}
                            id={"pyContractsPackage"} isFirstSection={false}>
            <p>{t('docsPage.content.other.pythonLesson.pyContractsPackage.p1')}</p>
        </MethodologySection>
    );
};

export default PyContractsPackage;