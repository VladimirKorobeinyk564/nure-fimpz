import {useTranslation} from "react-i18next";

import {StreamLanguage} from "@codemirror/language";
import {pascal} from "@codemirror/legacy-modes/mode/pascal";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function PartialCorrectnessCycle() {
    const {t} = useTranslation();

    const code = `
Init(x,z);
while(B)S(x,z);
    `
    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.label")}
            id={"partialCorrectnessCycle"}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.textOne")}</p>
            <CodeSnippet lang={[StreamLanguage.define(pascal)]} children={code}/>
            <p className={'mb-[10px] font-bold'}>{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.pTitle")}:</p>
            <List type={"Text"}>
                <li>{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.pOne")}</li>
                <li>{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.pTwo")}</li>
                <li>а{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.pThree")}</li>
            </List>
            <p>{t("docsPage.content.pz.pz1.provingPartialCorrectnessLoop.textTwo")}</p>
        </MethodologySection>
    )
}

export default PartialCorrectnessCycle;