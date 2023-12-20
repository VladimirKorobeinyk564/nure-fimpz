import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";

function GrammarLtlLogic() {
    return (
        <MethodologySection
            title={'Граматика логіки LTL'}
            id={"grammarLtlLogic"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Найчастіше при аналізі технічних систем використовуються
                логіки LTL і CTL, в яких немає поняття минулого.</p>
            <p className={"mb-[10px]"}>Граматика LTL формул наступна:</p>
            <MathExpression children={"φ → p | φ ∨ φ | ¬φ | X φ | φU φ | F φ | Gφ"} />
        </MethodologySection>
    )
}

export default GrammarLtlLogic;