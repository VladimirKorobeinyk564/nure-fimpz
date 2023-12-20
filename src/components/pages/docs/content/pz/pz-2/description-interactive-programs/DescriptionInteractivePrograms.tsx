import MathJax from "react-mathjax2";

import {useAppSelector} from "@/hooks/redux.ts";

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
    const theme = useAppSelector((state) => state.systemSettings.theme);

    const code = `begin
    х:=0; у:=1;
      while x+z < 5
        do {
              x:=5;
              if z=1 then
        y:=x+1;
              x:= -2; y:=1;
        }
    y:= x*y-5; x:=5;
end`

    return (
        <MethodologySection
            title={'Опис ітеративних програм'}
            id={"descriptionInteractivePrograms"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Структура Кріпке також може бути використана для опису ітеративних
                програм наступним чином.</p>
            <CodeSnippet lang={[StreamLanguage.define(pascal)]} title={"Ітеративна програма"} children={code}/>
            <ImageWrapper imgSubtitle={"Відповідність ітеративної програми і структури Кріпке"}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
            <div className={"flex mb-[10px]"}>
                <p className={"mr-2"}>Тепер легко перевірити, в яких станах системи виконуються умови: </p>
                <MathJax.Context input='ascii'>
                    <MathJax.Node inline>{`a≡x>y і b≡x+v<3`}</MathJax.Node>
                </MathJax.Context>
            </div>
            <ImageWrapper imgSubtitle={"Виконання логічної формули на структурі Кріпке"}
                          image={theme === "dark" ? diagramTwoImgDark : diagramTwoImgLight}/>
            <p>Якщо процес є взаємодією кількох паралельних потоків, то модель процесу - це
                паралельна композиція їх структур Кріпке.</p>
        </MethodologySection>
    )
}

export default DescriptionInteractivePrograms;