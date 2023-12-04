import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import AccentSpan from "@/components/common/accent-span/accent-span.tsx";

function FirstLaboratoryWork() {
    return (
        <div>
            <MethodologySection
                title={'Контрактне програмування'}
                id={"contractProgramming"}
                isFirstSection={true}
            >
                <MethodologyObjective>
                    Навчитися складати формальні специфікації реальних програм на основі парадигми «розробка за контрактом»
                </MethodologyObjective>
            </MethodologySection>
            <MethodologySection
                title={'Теоретичні відомості'}
                id={"theoreticalInformation"}
                isFirstSection={false}
            >
                <p className={'mb-[10px]'}>Для розробки специфікації пропонується використовувати <AccentSpan>Java Modeling Language (JML)</AccentSpan> [1, c.1-13].</p>
                <p className={'mb-[10px]'}>Це мова, яка формалізує інтерфейс поведінкової специфікації, який може бути використаний для опису поведінки Java-модулей. Він комбінує підходи «design by contract», запозичений з мови Eiffel, специфікацію на основі моделі, запозичену з мов специфікації сімейства Larch, та елементи refinement calculus (числення уточнень).</p>
                <p>Для обробки jml специфікацій можна користуватися будь-якою з двох консольних утиліт: jmlspecs[1, c.9-10] (обробляє java синтаксису 1.4) або OpenJml [2, 3-20] (java 1.4-1.7) – ще знаходиться у розробці. Також можна користуватися плагіном для середовища Eclipse – JMLEclipse [3].</p>
            </MethodologySection>
            <MethodologySection
                title={'Використання OpenJML'}
                id={"usingOpenjml"}
                isFirstSection={false}
            >
                <p>gg</p>
            </MethodologySection>
        </div>
    );
}

export default FirstLaboratoryWork;