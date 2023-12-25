import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgLight from "@/assets/images/pz1/diagram-one-light.jpg";
import diagramImgDark from "@/assets/images/pz1/diagram-one-dark.jpg";

function CycleDiagramPremise() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz1.schemeCycle.label")}
            id={"cycleDiagramPremise"}
            isFirstSection={false}
        >
            <ImageWrapper imgSubtitle={""} image={theme === "dark" ? diagramImgDark : diagramImgLight} />
        </MethodologySection>
    )
}

export default CycleDiagramPremise;