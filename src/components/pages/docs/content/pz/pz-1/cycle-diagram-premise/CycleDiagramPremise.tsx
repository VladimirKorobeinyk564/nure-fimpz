import {useAppSelector} from "@/hooks/redux.ts";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgLight from "@/assets/images/pz1/diagram-one-light.jpg";
import diagramImgDark from "@/assets/images/pz1/diagram-one-dark.jpg";

function CycleDiagramPremise() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Загальна схема циклу з передумовою'}
            id={"cycleDiagramPremise"}
            isFirstSection={false}
        >
            <ImageWrapper imgSubtitle={""} image={theme === "dark" ? diagramImgDark : diagramImgLight} />
        </MethodologySection>
    )
}

export default CycleDiagramPremise;