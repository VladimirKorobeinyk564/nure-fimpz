import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ControlQuestionsAndTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.controlQuestions.label")}
            id={"controlQuestionsAndTasksPz2"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aOne")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aTwo")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aThree")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aFour")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aFive")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aSix")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aSeven")}</li>
                <li>{t("docsPage.content.pz.pz2.controlQuestions.aEight")}</li>
            </List>
        </MethodologySection>
    )
}

export default ControlQuestionsAndTasks;