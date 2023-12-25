import MathJax from "react-mathjax2";

import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import {StreamLanguage} from "@codemirror/language"
import {pascal} from "@codemirror/legacy-modes/mode/pascal";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgDark from "@/assets/images/pz2/diagram-two-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-two-light.jpg";
import diagramTwoImgDark from "@/assets/images/pz2/diagram-three-dark.jpg";
import diagramTwoImgLight from "@/assets/images/pz2/diagram-three-light.jpg";

function DescriptionInteractivePrograms() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    const code = `begin
    х:=0; у:=1;
      while x+i < 5
        do {
              x:=5;
              if i=1 then
        y:=x+1;
              x:= -2; y:=1;
        }
    y:= x*y-5; x:=5;
end`

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.descriptionPrograms.label")}
            id={"descriptionInteractivePrograms"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.descriptionPrograms.textOne")}</p>
            <CodeSnippet lang={[StreamLanguage.define(pascal)]}
                         title={t("docsPage.content.pz.pz2.descriptionPrograms.codeT")} children={code}/>
            <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.descriptionPrograms.imageT")}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
            <div className={"flex mb-[10px]"}>
                <p className={"mr-2"}>{t("docsPage.content.pz.pz2.descriptionPrograms.textTwo")} </p>
                <MathJax.Context input='ascii'>
                    <MathJax.Node inline>{`a≡x>y і b≡x+v<3`}</MathJax.Node>
                </MathJax.Context>
            </div>
            <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.descriptionPrograms.imageTOne")}
                          image={theme === "dark" ? diagramTwoImgDark : diagramTwoImgLight}/>
            <p>{t("docsPage.content.pz.pz2.descriptionPrograms.textThree")}</p>
        </MethodologySection>
    )
}

export default DescriptionInteractivePrograms;