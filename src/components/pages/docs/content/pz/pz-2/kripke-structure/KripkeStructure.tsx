import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgDark from "@/assets/images/pz2/diagram-one-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-one-light.jpg";

function KripkeStructure() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.kripkeStructure.label")}
            id={"kripkeStructure"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.kripkeStructure.textOne")} <span
                className={"font-bold"}>{t("docsPage.content.pz.pz2.kripkeStructure.word")}</span></p>
            <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.kripkeStructure.image")}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default KripkeStructure;