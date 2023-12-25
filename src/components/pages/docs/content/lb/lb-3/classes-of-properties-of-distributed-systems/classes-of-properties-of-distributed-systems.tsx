import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import AccentSpan from "@/components/common/accent-span/accent-span";
import {useTranslation} from "react-i18next";

const ClassesOfPropertiesOfDistributedSystems = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.classesOfPropertiesDistributedSystems')} id={"classesOfPropertiesOfDistributedSystems"} isFirstSection={false}>
            <p>{t('docsPage.content.lb.lb3.classesOfPropertiesDistributedSystems.p1')}</p>
            <List type={"Text"}>
                <li>{t('docsPage.content.lb.lb3.classesOfPropertiesDistributedSystems.l1')}<AccentSpan>EF</AccentSpan>ϕ;</li>
                <li>{t('docsPage.content.lb.lb3.classesOfPropertiesDistributedSystems.l2')}<AccentSpan>G</AccentSpan>¬ϕ;</li>
                <li>{t('docsPage.content.lb.lb3.classesOfPropertiesDistributedSystems.l3')}<AccentSpan>GF</AccentSpan>ϕ;</li>
                <li>{t('docsPage.content.lb.lb3.classesOfPropertiesDistributedSystems.l4')}</li>
            </List>
        </MethodologySection>
    );
};

export default ClassesOfPropertiesOfDistributedSystems;