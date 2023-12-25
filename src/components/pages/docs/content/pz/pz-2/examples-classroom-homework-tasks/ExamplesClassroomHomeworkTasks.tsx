import MathJax from "react-mathjax2";

import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";
import List from "@/components/common/list/List.tsx";

import diagramImgOneLight from "@/assets/images/pz2/diagram-eight-light.jpg";
import diagramImgOneDark from "@/assets/images/pz2/diagram-eight-dark.jpg";
import diagramImgTwoLight from "@/assets/images/pz2/diagram-seven-light.jpg";
import diagramImgTwoDark from "@/assets/images/pz2/diagram-seven-dark.jpg";
import diagramImgThreeLight from "@/assets/images/pz2/diagram-nine-light.jpg";
import diagramImgThreeDark from "@/assets/images/pz2/diagram-nine-dark.jpg";
import diagramImgFourDark from "@/assets/images/pz2/diagram-six-dark.jpg";
import diagramImgFourLight from "@/assets/images/pz2/diagram-six-light.jpg";

function ExamplesClassroomHomeworkTasks() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.examplesTasks.label")}
            id={"examplesClassroomHomeworkTasksPz2"}
            isFirstSection={false}
        >
            <div className={"mb-[40px]"}>
                <div className={"mb-[10px]"}>
                    <p><span className={"font-bold"}>2.4.1 </span>{t("docsPage.content.pz.pz2.examplesTasks.tOne")}</p>
                    <List type={"Number"}>
                        <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesTasks.pOneTOne")}</li>
                        <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesTasks.pTwoTOne")} </li>
                        <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesTasks.pThreeTOne")}</li>
                        <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesTasks.pFourTOne")}</li>
                        <li className={"list-none"}>{t("docsPage.content.pz.pz2.examplesTasks.pFiveTOne")}</li>
                    </List>
                </div>
                <div className={"mb-[10px]"}>
                    <p><span className={"font-bold"}>2.4.2 </span>{t("docsPage.content.pz.pz2.examplesTasks.tTwo")}</p>
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
                    <p><span className={"font-bold"}>2.4.3 </span>{t("docsPage.content.pz.pz2.examplesTasks.tThree")}</p>
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
                    <p><span className={"font-bold"}>2.4.4 </span>{t("docsPage.content.pz.pz2.examplesTasks.tFour")}</p>
                    <ImageWrapper image={theme === "dark" ? diagramImgThreeDark : diagramImgThreeLight}/>
                </div>
                <div>
                    <p><span className={"font-bold"}>2.4.5 </span>{t("docsPage.content.pz.pz2.examplesTasks.tFive")}
                        <span className={"mx-1"}>
                <MathJax.Context input='ascii'>
                    <MathJax.Node inline>{`Φ = G ( p → XFq)`}</MathJax.Node>
                </MathJax.Context>
                </span>
                        {t("docsPage.content.pz.pz2.examplesTasks.tSix")}</p>
                    <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.examplesTasks.image")}
                                  image={theme === "dark" ? diagramImgFourDark : diagramImgFourLight}/>
                </div>
            </div>
        </MethodologySection>
    )
}

export default ExamplesClassroomHomeworkTasks;