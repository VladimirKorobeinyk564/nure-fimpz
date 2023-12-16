import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";

function DefinitionCycleInvariant() {
    return (
        <MethodologySection
            title={"Визначення інваріанта циклу"}
            id={"definitionCycleInvariant"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Предикат Inv(x, z) називається інваріантом циклу while, якщо істина
                наступна тріада Хоара:</p>
            <TerminalSnippet children={"{Inv(x, z)& B}S(x,z){Inv(x,z)}"}/>
            <p>Змістовно це означає, що з істинності інваріанта циклу до початку
                виконання тіла циклу і з істинності умови циклу, що гарантує виконання
                тіла, випливає істинність інваріанта після виконання тіла циклу. Скільки
                б разів не виконувалося тіло циклу, його інваріант залишається
                істинним.</p>
        </MethodologySection>
    )
}

export default DefinitionCycleInvariant;