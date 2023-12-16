import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function DeductiveVerificationPrograms() {
    return (
        <MethodologySection
            title={'Дедуктивна верифікація програм'}
            id={"DeductiveVerificationPrograms"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                Тренування навичок у доведенні коректності ітеративних
                програм на основі передумов, постумов та інваріант
                циклів.
            </MethodologyObjective>
        </MethodologySection>
    )
}

export default DeductiveVerificationPrograms;