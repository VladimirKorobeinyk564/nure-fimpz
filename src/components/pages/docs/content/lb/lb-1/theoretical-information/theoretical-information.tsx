import AccentSpan from "@/components/common/accent-span/accent-span.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import {useTranslation} from "react-i18next";

function TheoreticalInformation() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.theoreticalInformation.label')}
            id={"theoreticalInformation"}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.theoreticalInformation.p1.t1')}
                <AccentSpan>{t('docsPage.content.lb.lb1.theoreticalInformation.p1.span')} </AccentSpan>
                {t('docsPage.content.lb.lb1.theoreticalInformation.p1.t2')}</p>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.theoreticalInformation.p2')}</p>
            <p>{t('docsPage.content.lb.lb1.theoreticalInformation.p3')}</p>
        </MethodologySection>
    );
}

export default TheoreticalInformation;