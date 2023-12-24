import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";

function LtlAndCtl() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.ltlAndCtl.label")}
            id={"ltlAndCtl"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.ltlAndCtl.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.ltlAndCtl.textTwo")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.ltlAndCtl.textThree")}</p>
            <MathExpression children={"φ → p | φ ∨ φ | ¬φ | EX φ | E (φU φ ) | AFφ"}/>
        </MethodologySection>
    )
}

export default LtlAndCtl;