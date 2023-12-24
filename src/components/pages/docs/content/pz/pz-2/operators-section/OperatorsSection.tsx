import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function OperatorsSection() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.operators.label")}
            id={"operatorsSection"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.operators.pTitle")}</p>
            <List type={"Text"}>
                <li><span className={"font-bold"}>F</span>{t("docsPage.content.pz.pz2.operators.pOne")}</li>
                <li><span className={"font-bold"}>P</span>{t("docsPage.content.pz.pz2.operators.pTwo")}</li>
                <li><span className={"font-bold"}>G</span>{t("docsPage.content.pz.pz2.operators.pThree")}</li>
                <li><span className={"font-bold"}>Н</span>{t("docsPage.content.pz.pz2.operators.pFour")}</li>
                <li>p<span className={"font-bold"}>U</span>{t("docsPage.content.pz.pz2.operators.pFive")}</li>
                <li><span className={"font-bold"}>Х</span>{t("docsPage.content.pz.pz2.operators.pSix")}</li>
            </List>
        </MethodologySection>
    )
}

export default OperatorsSection;