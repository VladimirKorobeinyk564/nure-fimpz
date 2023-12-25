import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function ExampleStatementCtlLogic() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.exampleStatementCtl.label")}
            id={"exampleStatementCtlLogic"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.exampleStatementCtl.textOne")}</p>
        </MethodologySection>
    )
}

export default ExampleStatementCtlLogic;