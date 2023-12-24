import {useTranslation} from "react-i18next";

import {cn} from "@/lib/utils.ts";
import MathJax from "react-mathjax2";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function PathQuantifiers() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.pathQuantifiers.label")}
            id={"pathQuantifiers"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.pathQuantifiers.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.pathQuantifiers.textTwo")}</p>
            <MathJax.Context input='ascii'>
                <div
                    className={cn(`flex justify-center items-center py-[40px] w-full rounded-[15px] bg-[#CDDFFF] dark:bg-[#1F242E] mb-[10px]`)}>

                    <p className={"text-[#1D4A80] dark:text-[#5890D2] text-[25px] italic font-serif"}>
                        <MathJax.Node inline>Е^φ</MathJax.Node>“{t("docsPage.content.pz.pz2.pathQuantifiers.textThree")}
                         <MathJax.Node inline>φ</MathJax.Node> {t("docsPage.content.pz.pz2.pathQuantifiers.wordOne")}”
                        (<span className={"font-bold"}>E</span>xists)<br/>
                        <MathJax.Node inline>А^φ</MathJax.Node>“{t("docsPage.content.pz.pz2.pathQuantifiers.textFour")}
                         <MathJax.Node inline>φ</MathJax.Node> {t("docsPage.content.pz.pz2.pathQuantifiers.wordOne")}”
                        (<span className={"font-bold"}>A</span>ll)
                    </p>
                </div>
            </MathJax.Context>
            <MathJax.Context input='ascii'>
                <div><p>{t("docsPage.content.pz.pz2.pathQuantifiers.wordTwo")}, <MathJax.Node
                    inline>А^φ=Е^φ</MathJax.Node>.</p></div>
            </MathJax.Context>

        </MethodologySection>
    )
}

export default PathQuantifiers;