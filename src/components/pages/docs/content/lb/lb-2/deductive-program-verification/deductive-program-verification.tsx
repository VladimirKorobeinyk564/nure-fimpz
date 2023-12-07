import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function DeductiveProgramVerification() {
    return (
        <MethodologySection
            title={'Дедуктивна верифікація програм'}
            id={"deductiveProgramVerification"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                Навчитися проводити статичну верифікацію об’єктно-орієнтованих програм на основі дедуктивної логіки та
                символьного виконання программ.
            </MethodologyObjective>
        </MethodologySection>
    );
}

export default DeductiveProgramVerification;