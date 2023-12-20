import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";

function ProgramVerificationTemporalLogic() {
    return (
        <MethodologySection
            title={'Верифікація програм на основі темпоральної логіки'}
            id={"programVerificationTemporalLogic"}
            isFirstSection={true}
        >
            <MethodologyObjective>
                Тренування навичок у формалізації висловлювань формулами темпоральної логіки та використанні методів
                перевірки їх виконання на моделі Кріпке, побудованій з алгоритму, що перевіряється.
            </MethodologyObjective>
        </MethodologySection>
    )
}

export default ProgramVerificationTemporalLogic;