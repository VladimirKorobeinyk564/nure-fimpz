import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";

function ContractProgramming() {
    return (
        <MethodologySection
            title={'Контрактне програмування'}
            id={"contractProgramming"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                Навчитися складати формальні специфікації реальних програм на основі парадигми «розробка за
                контрактом»
            </MethodologyObjective>
        </MethodologySection>
    );
}

export default ContractProgramming;