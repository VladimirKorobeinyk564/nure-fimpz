import MathJax from "react-mathjax2";

import {useAppSelector} from "@/hooks/redux.ts";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgDark from "@/assets/images/pz2/diagram-four-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-four-light.jpg";

function PrincipleCtlVerification() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Принцип перевірки CTL формули на структурі Кріпке'}
            id={"principleCtlVerification"}
            isFirstSection={false}
        >
            <List type={"Number"} className={"!list-none"}>
                <li><span className={"font-bold"}>Крок 1. </span>Побудувати дерево синтаксичного розбору формули.</li>
                <li><span className={"font-bold"}>Крок 2. </span>Ті стани структури Кріпке, в яких виконуються
                    примітивні складові формули (листя дерева), позначити
                    цими формулами.
                </li>
                <li><span className={"font-bold"}>Крок 3. </span>Застосувати правила маркування [2, c.98-99] станів в
                    структурі Кріпке на основі композицій примітивних формул,
                    підіймаючись в дереві від листя до кореня.
                </li>
            </List>
            <p className={"mb-[10px]"}>Наприклад, покажемо результат перевірки виконання формули
                <MathJax.Context input='ascii'>
                    <span className={"mx-2"}>
                        <MathJax.Node inline>
                            {`φ = E (EX ¬ p U AF ( q ∧ r))`}
                        </MathJax.Node>
                    </span>
                </MathJax.Context>
                в наступній структурі Кріпке:
            </p>
            <ImageWrapper imgSubtitle={"Перевірка CTL формули на структурі Кріпке"}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default PrincipleCtlVerification;