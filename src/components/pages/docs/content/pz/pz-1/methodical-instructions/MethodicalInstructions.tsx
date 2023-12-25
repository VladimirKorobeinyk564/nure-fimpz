import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function MethodicalInstructions() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.methodical.label")}
            id={"methodicalInstructionsPzOne"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz1.methodical.textOne")}</p>
            <List type={"Text"}>
                <li className={"font-bold"}>{t("docsPage.content.pz.pz1.methodical.pOne")}</li>
                <li className={"font-bold"}>{t("docsPage.content.pz.pz1.methodical.pTwo")}</li>
            </List>
            <p>{t("docsPage.content.pz.pz1.methodical.textTwo")}</p>
        </MethodologySection>
    )
}

export default MethodicalInstructions;