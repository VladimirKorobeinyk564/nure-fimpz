import {useAppSelector} from "@/hooks/redux.ts";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";


import diagramImgDark from "@/assets/images/pz2/diagram-five-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-five-light.jpg";

function ExampleBuhiAutomaton() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Приклад автомата Бюхі'}
            id={"exampleBuchyAutomaton"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Наприклад, наступний автомат описує формулу <span className={"font-bold mr-1"}>G ( p → Gp )</span>
                – описує ланцюжки, в яких після першої появи події p ця
                подія тримається нескінченне число разів:</p>
            <ImageWrapper imgSubtitle={"Приклад автомата Бюхі"}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default ExampleBuhiAutomaton;