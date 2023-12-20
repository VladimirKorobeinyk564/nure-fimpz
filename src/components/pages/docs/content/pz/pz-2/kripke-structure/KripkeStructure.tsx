import {useAppSelector} from "@/hooks/redux.ts";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgDark from "@/assets/images/pz2/diagram-one-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-one-light.jpg";

function KripkeStructure() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Cтруктура Кріпке'}
            id={"kripkeStructure"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Cтруктура Кріпке – система переходів з поміченими станами і
                непоміченими переходами; розгортка структури Кріпке визначає
                нескінченні ланцюжки станів – можливу історію <span className={"font-bold"}>обчислень</span></p>
            <ImageWrapper imgSubtitle={"Структура Кріпке та розгортка структури Кріпке"}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default KripkeStructure;