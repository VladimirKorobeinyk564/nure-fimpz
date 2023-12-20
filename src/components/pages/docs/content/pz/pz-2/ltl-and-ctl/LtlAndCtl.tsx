import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";

function LtlAndCtl() {
    return (
        <MethodologySection
            title={'LTL та CTL'}
            id={"ltlAndCtl"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>В
                LTL (Linear Temporal Logic) – темпоральній логіці лінійного часу,
                формулам шляху передує квантор шляху А: вони повинні виконуватися
                для всіх обчислень структури Кріпке.</p>
            <p className={"mb-[10px]"}>В
                CTL (Computational Tree Logic) – темпоральній логіці
                розгалуженого часу, кожному темпоральному оператору передує квантор
                шляху А чи Е.</p>
            <p className={"mb-[10px]"}>Граматика формул CTL:</p>
            <MathExpression children={"φ → p | φ ∨ φ | ¬φ | EX φ | E (φU φ ) | AFφ"}/>
        </MethodologySection>
    )
}

export default LtlAndCtl;