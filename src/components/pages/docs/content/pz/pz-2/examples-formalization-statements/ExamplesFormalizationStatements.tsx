import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ExamplesFormalizationStatements() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.examplesFormalization.label")}
            id={"examplesFormalizationStatements"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}><span
                className={"font-bold"}>P </span>{t("docsPage.content.pz.pz2.examplesFormalization.textOne")} /\<span
                className={"font-bold"}> XF</span> {t("docsPage.content.pz.pz2.examplesFormalization.textTwo")}</p>
            <p><span className={"font-bold"}>PG </span>{t("docsPage.content.pz.pz2.examplesFormalization.textThree")}
            </p>
            <List type={"Number"}>
                <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesFormalization.textFour")}</li>
            </List>
            <p><span
                className={"font-bold"}>G</span> {`(${t("docsPage.content.pz.pz2.examplesFormalization.textFive")} =>`}
                <span className={"font-bold"}>G</span> {t("docsPage.content.pz.pz2.examplesFormalization.textFive")})
            </p>
            <List type={"Number"}>
                <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesFormalization.textSix")}</li>
            </List>
        </MethodologySection>
    )
}

export default ExamplesFormalizationStatements;