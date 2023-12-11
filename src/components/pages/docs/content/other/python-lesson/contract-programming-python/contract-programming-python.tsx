import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective";

const ContractProgrammingPython = () => {
    return (
        <MethodologySection title={"Контрактне програмування в Python"}
                            id={"contractProgrammingPython"} isFirstSection={true}>
            <MethodologyObjective>
                навчитися складати формальні специфікації реальних програм на основі парадигми «розробка за контрактом».
            </MethodologyObjective>
        </MethodologySection>
    );
};

export default ContractProgrammingPython;