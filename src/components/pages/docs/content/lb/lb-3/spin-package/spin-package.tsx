import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import AccentSpan from "@/components/common/accent-span/accent-span";
import {useTranslation} from "react-i18next";

const SpinPackage = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.spinPackage')}
                            id={"spinPackage"} isFirstSection={false}>
            <p>{t('docsPage.content.lb.lb3.spinPackage.p1')}</p>
            <List type={"Text"}>
                <li>{t('docsPage.content.lb.lb3.spinPackage.l1')}</li>
                <li>{t('docsPage.content.lb.lb3.spinPackage.l2')}</li>
                <li>{t('docsPage.content.lb.lb3.spinPackage.l3')}</li>
            </List>
            <p>{t('docsPage.content.lb.lb3.spinPackage.p2')}</p>
            <p>{t('docsPage.content.lb.lb3.spinPackage.p3')}<AccentSpan>{t('docsPage.content.lb.lb3.spinPackage.p4')}</AccentSpan>{t('docsPage.content.lb.lb3.spinPackage.p5')}
                <AccentSpan>{t('docsPage.content.lb.lb3.spinPackage.p6')}</AccentSpan>{t('docsPage.content.lb.lb3.spinPackage.p7')}</p>
        </MethodologySection>
    );
};

export default SpinPackage;