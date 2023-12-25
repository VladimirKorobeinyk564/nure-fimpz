import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ControlQuestionsAndTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.controlQuestionsAndTasks.label")}
            id={"controlQuestionsAndTasksPz1"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li>{t("docsPage.content.pz.pz1.controlQuestionsAndTasks.qOne")}</li>
                <li>{t("docsPage.content.pz.pz1.controlQuestionsAndTasks.qTwo")}</li>
                <li>{t("docsPage.content.pz.pz1.controlQuestionsAndTasks.qThree")}</li>
                <li>{t("docsPage.content.pz.pz1.controlQuestionsAndTasks.qFour")}</li>
            </List>
        </MethodologySection>
    )
}

export default ControlQuestionsAndTasks;