import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective";

const ProgramVerificationBasedOnTemporalLogic = () => {
    return (
        <MethodologySection title={"Верифікація програм на основі темпоральної логіки"}
                            id={"programVerificationBasedOnTemporalLogic"} isFirstSection={true}>
            <MethodologyObjective>
                Навчитися проводити верифікацію автоматних моделей програм на основі темпоральної логіки LTL.
            </MethodologyObjective>
        </MethodologySection>
    );
};

export default ProgramVerificationBasedOnTemporalLogic;