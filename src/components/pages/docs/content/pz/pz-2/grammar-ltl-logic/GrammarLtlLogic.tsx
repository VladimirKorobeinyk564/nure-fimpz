import {useTranslation} from "react-i18next";

import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";

function GrammarLtlLogic() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t("docsPage.content.pz.pz2.grammarLtlLogic.label")}
            id={"grammarLtlLogic"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.grammarLtlLogic.textOne")}</p>
            <p className={"mb-[10px]"}>{t("docsPage.content.pz.pz2.grammarLtlLogic.textTwo")}</p>
            <MathExpression children={"φ → p | φ ∨ φ | ¬φ | X φ | φU φ | F φ | Gφ"}/>
        </MethodologySection>
    )
}

export default GrammarLtlLogic;