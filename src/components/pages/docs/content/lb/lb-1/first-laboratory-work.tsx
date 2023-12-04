import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";

function FirstLaboratoryWork() {
    return (
        <div>
            <MethodologySection
                title={'Контрактне програмування'}
                id={"contractProgramming"}
                isFirstSection={true}
            >
                <MethodologyObjective>
                    <p>Навчитися складати формальні специфікації реальних програм на основі парадигми «розробка за контрактом»</p>
                </MethodologyObjective>
            </MethodologySection>
            <MethodologySection
                title={'Теоретичні відомості'}
                id={"theoreticalInformation"}
                isFirstSection={false}
            >
                <p>Для розробки специфікації пропонується використовувати Java Modeling Language (JML)[1, c.1-13].</p>
                <p>Це мова, яка формалізує інтерфейс
                    поведінкової специфікації, який може бути використаний для опису
                    поведінки Java-модулей. Він комбінує підходи «design by contract»,
                    запозичений з мови Eiffel, специфікацію на основі моделі, запозичену з
                    мов специфікації сімейства Larch, та елементи refinement calculus
                    (числення уточнень).</p>
            </MethodologySection>
        </div>
    );
}

export default FirstLaboratoryWork;