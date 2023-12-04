import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective.tsx";
import AccentSpan from "@/components/common/accent-span/accent-span.tsx";
import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import List from "@/components/common/list/List.tsx";

function FirstLaboratoryWork() {
    return (
        <div>
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
            <MethodologySection
                title={'Теоретичні відомості'}
                id={"theoreticalInformation"}
                isFirstSection={false}
            >
                <p className={'mb-[10px]'}>Для розробки специфікації пропонується використовувати <AccentSpan>Java
                    Modeling Language (JML)</AccentSpan> [1, c.1-13].</p>
                <p className={'mb-[10px]'}>Це мова, яка формалізує інтерфейс поведінкової специфікації, який може бути
                    використаний для опису поведінки Java-модулей. Він комбінує підходи «design by contract»,
                    запозичений з мови Eiffel, специфікацію на основі моделі, запозичену з мов специфікації сімейства
                    Larch, та елементи refinement calculus (числення уточнень).</p>
                <p>Для обробки jml специфікацій можна користуватися будь-якою з двох консольних утиліт: jmlspecs[1,
                    c.9-10] (обробляє java синтаксису 1.4) або OpenJml [2, 3-20] (java 1.4-1.7) – ще знаходиться у
                    розробці. Також можна користуватися плагіном для середовища Eclipse – JMLEclipse [3].</p>
            </MethodologySection>
            <SectionDivider></SectionDivider>
            <MethodologySection
                title={'Використання OpenJML'}
                id={"usingOpenjml"}
                isFirstSection={false}
            >
                <p>Інструкції з використання OpenJML наступні.</p>

                <div className="mb-[20px]">
                    <List type={'Number'}>
                        <li>Розпакувати останню версію openjml у нову директорію,
                            наприклад, <code>d:\users\openjml</code>.
                        </li>
                        <li>Розпакувати поруч утиліту автоматичного доведення теорем yices, наприклад
                            до <code>d:\users\openjml\yices</code>.
                        </li>
                        <li>Додати директорію <code>d:\users\openjml</code> до змінної CLASSPATH.</li>
                        <li>Створити конфігураційний файл <code>openjml.properties</code> у
                            директорії <code>d:\users\openjml</code> з наступним вмістом
                        </li>
                    </List>
                </div>

                <div className={'code p-[20px] bg-[#16181d] rounded-[10px] mb-[20px]'}>
                    <code>
                        openjml.localSetup=
                        <br/>
                        openjml.defaultProver=yices
                        <br/>
                        openjml.prover.yices= d:/users/openjml/yices/bin/yices.exe
                    </code>
                </div>

                <p>Правила користування утилітою детально описані в мануалі [2, 6-12].</p>
                <p>Наведемо лише основні команди.</p>

                <p>Запуск перевірки синтаксису анотацій:</p>
                <div className={'code bg-[#16181d] rounded-[10px] overflow-hidden mb-[20px]'}>
                    <div className="title-block font-medium bg-[#343a46] px-[20px] py-[5px] text-primary-color">
                        Для jdk 1.7
                    </div>
                    <div className="content p-[20px] ">
                        <code>{'java -jar openjml.jar -source 1.7 -noInternalSpecs <File.java>'}</code>
                    </div>
                </div>
            </MethodologySection>
        </div>
    );
}

export default FirstLaboratoryWork;