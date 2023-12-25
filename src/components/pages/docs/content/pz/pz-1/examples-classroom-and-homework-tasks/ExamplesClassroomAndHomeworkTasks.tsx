import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ExamplesClassroomAndHomeworkTasks() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.label")}
            id={"examplesClassroomAndHomeworkTasksPz1"}
            isFirstSection={false}
        >
            <div className="mb-[40px]">
                <List type={"Text"}>
                    <li><span
                        className={"font-bold"}>1.5.1 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tOne")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.2 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tTwo")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.3 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tThree")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.4 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tFour")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.5 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tFive")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.6 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tSix")}
                    </li>
                    <li><span
                        className={"font-bold"}>1.5.7 </span>{t("docsPage.content.pz.pz1.examplesClassroomAndHomeworkTasks.tSeven")}
                    </li>
                </List>
            </div>
        </MethodologySection>
    )
}

export default ExamplesClassroomAndHomeworkTasks;