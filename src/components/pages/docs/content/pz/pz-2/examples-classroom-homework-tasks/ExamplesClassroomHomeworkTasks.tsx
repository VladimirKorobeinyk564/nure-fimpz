import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import {useAppSelector} from "@/hooks/redux.ts";
import MathJax from "react-mathjax2";

import diagramImgOneLight from "@/assets/images/pz2/diagram-eight-light.jpg";
import diagramImgOneDark from "@/assets/images/pz2/diagram-eight-dark.jpg";
import diagramImgTwoLight from "@/assets/images/pz2/diagram-seven-light.jpg";
import diagramImgTwoDark from "@/assets/images/pz2/diagram-seven-dark.jpg";
import diagramImgThreeLight from "@/assets/images/pz2/diagram-nine-light.jpg";
import diagramImgThreeDark from "@/assets/images/pz2/diagram-nine-dark.jpg";
import diagramImgFourDark from "@/assets/images/pz2/diagram-six-dark.jpg";
import diagramImgFourLight from "@/assets/images/pz2/diagram-six-light.jpg";


import List from "@/components/common/list/List.tsx";

function ExamplesClassroomHomeworkTasks() {
    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={'Приклади аудиторних і домашніх задач'}
            id={"examplesClassroomHomeworkTasksPz2"}
            isFirstSection={false}
        >
            <div className={"mb-[40px]"}>
                <div className={"mb-[10px]"}>
                    <p><span className={"font-bold"}>2.4.1 </span>Формалізуйте висловлювання</p>
                    <List type={"Number"}>
                        <li className={"list-none"}>а) Якщо я бачив її раніше, то я впізнаю її під час зустрічі.</li>
                        <li className={"list-none"}>б) У всіх режимах після того, як запит req встановиться, він ніколи
                            не
                            буде знятий, доки на нього не прийде підтвердження.
                        </li>
                        <li className={"list-none"}>в) Будь-який запит до ресурсу буде висіти до підтвердження або
                            відхилення.
                        </li>
                        <li className={"list-none"}>г) Завжди, куди б ми не потрапили в нашому житті, існує такий шлях,
                            що
                            на ньому в кінці кінців обов'язково потрапимо в стан, з якого йде шлях
                            істиної віри.
                        </li>
                        <li className={"list-none"}>д) З будь-якого стану при будь-якому функціонуванні системи
                            обов'язково повернемося до стану рестарту.
                        </li>
                    </List>
                </div>
                <div className={"mb-[10px]"}>
                    <p><span className={"font-bold"}>2.4.2 </span>Співставте формули наступним трекам систем</p>
                    <div className={"flex"}>
                        <div className={"w-1/2"}>
                            <img src={theme === "dark" ? diagramImgOneDark : diagramImgOneLight} alt={"diagram"}
                                 className={"w-full h-auto"}/>
                        </div>
                        <MathJax.Context input='ascii'>
                            <div className={"w-1/2"}>
                                <List type={"Number"}>
                                    <li><MathJax.Node inline>{`FR → φUR`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`G (Q → ϕ ∧ X (φUR ∨ G ( ¬ R ∧ϕ))`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`Gφ`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`G (Q ∧ XFR ) → (ϕ ∧ X (φUR)))`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`G (Q → Gφ)`}</MathJax.Node></li>
                                </List>
                            </div>
                        </MathJax.Context>

                    </div>
                </div>
                <div className={"mb-[10px]"}>
                    <p><span className={"font-bold"}>2.4.3 </span>Перевірте виконання CTL формул на структурі Кріпке</p>
                    <div className={"flex"}>
                        <div className={"w-1/2"}>
                            <img src={theme === "dark" ? diagramImgTwoDark : diagramImgTwoLight} alt={"diagram"}
                                 className={"w-full h-auto"}/>
                        </div>
                        <MathJax.Context input='ascii'>
                            <div className={"w-1/2"}>
                                <List type={"Number"}>
                                    <li><MathJax.Node inline>{`M,s_0|=p∧q`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=EX(q∧r)`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=¬AX(q∧r)`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=¬EF(p∧r)`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=¬EGr`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=AFr`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=E[(p∧q)Ur]`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=A[pUr]`}</MathJax.Node></li>
                                    <li><MathJax.Node inline>{`M,s_0|=EF AGr`}</MathJax.Node></li>
                                </List>
                            </div>
                        </MathJax.Context>

                    </div>
                </div>
                <div>
                    <p><span className={"font-bold"}>2.4.4 </span>Знайдіть перетин автоматних мов:</p>
                    <ImageWrapper image={theme === "dark" ? diagramImgThreeDark : diagramImgThreeLight}/>
                </div>
                <div>
                    <p><span className={"font-bold"}>2.4.5 </span>Перевірте, чи виконується формула LTL
                        <span className={"mx-1"}>
                <MathJax.Context input='ascii'>
                    <MathJax.Node inline>{`Φ = G ( p → XFq)`}</MathJax.Node>
                </MathJax.Context>
                </span>
                        для наступної структури Кріпке. У випадку невиконання
                        наведіть контр приклад.</p>
                    <ImageWrapper imgSubtitle={"Структура Кріпке"}
                                  image={theme === "dark" ? diagramImgFourDark : diagramImgFourLight}/>
                </div>
            </div>
        </MethodologySection>
    )
}

export default ExamplesClassroomHomeworkTasks;