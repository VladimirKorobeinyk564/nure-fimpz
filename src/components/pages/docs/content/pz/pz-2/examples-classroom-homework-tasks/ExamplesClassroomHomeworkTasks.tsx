import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";
import diagramImgDark from "@/assets/images/pz2/diagram-six-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-six-light.jpg";
import {useAppSelector} from "@/hooks/redux.ts";
import MathJax from "react-mathjax2";

function ExamplesClassroomHomeworkTasks() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Приклади аудиторних і домашніх задач'}
            id={"examplesClassroomHomeworkTasksPz2"}
            isFirstSection={false}
        >
            <div>

            </div>
            <div>
                <p>2.4.5 Перевірте, чи виконується формула LTL
                    <span className={"mx-1"}>
                <MathJax.Context input='ascii'>
                    <MathJax.Node inline>{`Φ = G ( p → XFq)`}</MathJax.Node>
                </MathJax.Context>
                </span>
                    для наступної структури Кріпке. У випадку невиконання
                    наведіть контр приклад.</p>
                <ImageWrapper imgSubtitle={"Структура Кріпке"}
                              image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
            </div>
        </MethodologySection>
    )
}

export default ExamplesClassroomHomeworkTasks;