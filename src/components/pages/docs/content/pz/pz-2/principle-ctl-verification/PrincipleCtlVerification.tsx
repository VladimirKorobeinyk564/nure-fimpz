import MathJax from "react-mathjax2";

import {useAppSelector} from "@/hooks/redux.ts";
import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";

import diagramImgDark from "@/assets/images/pz2/diagram-four-dark.jpg";
import diagramImgLight from "@/assets/images/pz2/diagram-four-light.jpg";

function PrincipleCtlVerification() {
    const {t} = useTranslation();

    const theme = useAppSelector((state) => state.systemSettings.theme);

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.principleCtlVerification.label")}
            id={"principleCtlVerification"}
            isFirstSection={false}
        >
            <List type={"Number"} className={"!list-none"}>
                <li><span
                    className={"font-bold"}>{t("docsPage.content.pz.pz2.principleCtlVerification.step")} 1. </span>{t("docsPage.content.pz.pz2.principleCtlVerification.textOne")}
                </li>
                <li><span
                    className={"font-bold"}>{t("docsPage.content.pz.pz2.principleCtlVerification.step")} 2. </span>{t("docsPage.content.pz.pz2.principleCtlVerification.textTwo")}
                </li>
                <li><span
                    className={"font-bold"}>{t("docsPage.content.pz.pz2.principleCtlVerification.step")} 3. </span>{t("docsPage.content.pz.pz2.principleCtlVerification.textThree")}
                </li>
            </List>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.principleCtlVerification.textFour")}
                <MathJax.Context input='ascii'>
                    <span className={"mx-2"}>
                        <MathJax.Node inline>
                            {`φ = E (EX ¬ p U AF ( q ∧ r))`}
                        </MathJax.Node>
                    </span>
                </MathJax.Context>
                {t("docsPage.content.pz.pz2.principleCtlVerification.textFive")}
            </p>
            <ImageWrapper imgSubtitle={t("docsPage.content.pz.pz2.principleCtlVerification.image")}
                          image={theme === "dark" ? diagramImgDark : diagramImgLight}/>
        </MethodologySection>
    )
}

export default PrincipleCtlVerification;