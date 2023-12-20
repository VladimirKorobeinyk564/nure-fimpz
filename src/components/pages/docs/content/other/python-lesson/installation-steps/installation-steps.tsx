import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import {useTranslation} from "react-i18next";

const InstallationSteps = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.installationSteps')}
                            id={"installationSteps"} isFirstSection={false}>
            <p>
                {t('docsPage.content.other.pythonLesson.installationSteps.p1')} <a href={"https://www.youtube.com/watch?v=i-MuSAwgwCU"} className={"text-primary-color"}>https://www.youtube.com/watch?v=i-MuSAwgwCU</a> {t('docsPage.content.other.pythonLesson.installationSteps.p2')}
            </p>
            <p>
                {t('docsPage.content.other.pythonLesson.installationSteps.p3')} <a href={"https://www.youtube.com/watch?v=ebeebaumL3M"} className={"text-primary-color"}>https://www.youtube.com/watch?v=ebeebaumL3M</a> {t('docsPage.content.other.pythonLesson.installationSteps.p4')}
            </p>
            <p>{t('docsPage.content.other.pythonLesson.installationSteps.p5')}</p>
        </MethodologySection>
    );
};

export default InstallationSteps;