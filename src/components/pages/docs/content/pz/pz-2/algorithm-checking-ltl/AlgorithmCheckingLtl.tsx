import {useTranslation} from "react-i18next";

import MathJax from "react-mathjax2";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function AlgorithmCheckingLtl() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.algorithmChecking.label")}
            id={"algorithmCheckingLtl"}
            isFirstSection={false}
        >
            <MathJax.Context input='ascii'>
                <List type={"Number"}>
                    <li>{t("docsPage.content.pz.pz2.algorithmChecking.textOne")} <MathJax.Node
                        inline>К</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textTwo")} <MathJax.Node
                        inline>AК</MathJax.Node>. {t("docsPage.content.pz.pz2.algorithmChecking.textThree")}
                        <MathJax.Node inline>К</MathJax.Node>.
                    </li>
                    <li>{t("docsPage.content.pz.pz2.algorithmChecking.textFour")} <MathJax.Node
                        inline>Ф</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textFive")} <MathJax.Node
                        inline>Ф</MathJax.Node>, {t("docsPage.content.pz.pz2.algorithmChecking.textSix")} <MathJax.Node
                        inline>Ф</MathJax.Node>.
                    </li>
                    <li>{t("docsPage.content.pz.pz2.algorithmChecking.textSeven")} <MathJax.Node inline>А_К⊗
                        В_Ф</MathJax.Node>. {t("docsPage.content.pz.pz2.algorithmChecking.textEight")}<MathJax.Node
                        inline>А_К</MathJax.Node>і <MathJax.Node
                        inline>В_Ф</MathJax.Node>, {t("docsPage.content.pz.pz2.algorithmChecking.textNine")}
                    </li>
                    <li>{t("docsPage.content.pz.pz2.algorithmChecking.textTen")} <MathJax.Node
                        inline>Ф</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textEleven")}
                        <MathJax.Node
                            inline>K</MathJax.Node>, {t("docsPage.content.pz.pz2.algorithmChecking.textTwelve")}
                        <MathJax.Node inline>А_К⊗
                            В_Ф</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textThirteen")}
                    </li>
                    <li>{t("docsPage.content.pz.pz2.algorithmChecking.textFourteen")} <MathJax.Node inline>А_К⊗
                        В_Ф</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textFifteen")} <MathJax.Node
                        inline>L А_К⊗ В_Ф</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textSixteen")}
                        <MathJax.Node
                            inline>K</MathJax.Node> {t("docsPage.content.pz.pz2.algorithmChecking.textSeventeen")}
                        <MathJax.Node inline>Ф</MathJax.Node>.
                    </li>
                    <p>{t("docsPage.content.pz.pz2.algorithmChecking.textEighteen")}</p>
                </List>
            </MathJax.Context>
        </MethodologySection>
    )
}

export default AlgorithmCheckingLtl;