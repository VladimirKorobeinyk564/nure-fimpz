import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";


import diagramImgDark from "@/assets/images/pz2/diagram-five-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-five-light.jpg";

function ExampleBuhiAutomaton() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.exampleBuhi.label")}
            id={"exampleBuhiAutomaton"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.exampleBuhi.textOne")}<span
                className={"font-bold mr-1"}> G ( p → Gp )</span>{t("docsPage.content.pz.pz2.exampleBuhi.textTwo")}</p>
            <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.exampleBuhi.image")}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default ExampleBuhiAutomaton;