import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function DefinitionCycleInvariant() {
    return (
        <MethodologySection
            title={"Визначення інваріанта циклу"}
            id={"definitionCycleInvariant"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Предикат Inv(x, z) називається інваріантом циклу while, якщо істина
                наступна тріада Хоара:</p>
            <CodeSnippet children={"\n" + "{Inv(x, z)& B}S(x,z){Inv(x,z)}" + "\n"}/>
            <p>Змістовно це означає, що з істинності інваріанта циклу до початку
                виконання тіла циклу і з істинності умови циклу, що гарантує виконання
                тіла, випливає істинність інваріанта після виконання тіла циклу. Скільки
                б разів не виконувалося тіло циклу, його інваріант залишається
                істинним.</p>
        </MethodologySection>
    )
}

export default DefinitionCycleInvariant;