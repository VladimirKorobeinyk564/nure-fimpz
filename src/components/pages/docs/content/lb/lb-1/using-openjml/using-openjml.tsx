import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";

function UsingOpenjml() {
    return (

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

            <TerminalSnippet>
                {`
                openjml.localSetup=
                
                openjml.defaultProver=yices
                
                openjml.prover.yices= d:/users/openjml/yices/bin/yices.exe`}
            </TerminalSnippet>

            <p>Правила користування утилітою детально описані в мануалі [2, 6-12].</p>
            <p>Наведемо лише основні команди.</p>

            <p className={'mb-[10px]'}>Запуск перевірки синтаксису анотацій:</p>
            <TerminalSnippet title={'Для jdk 1.7'}>
                {'java -jar openjml.jar -source 1.7 -noInternalSpecs <File.java>'}
            </TerminalSnippet>
            <TerminalSnippet title={'Для jdk 1.6'}>
                {'java -Xbootclasspath/p:d:\\users\\openjml/openjmlboot.jar -jar openjml.jar -source 1.7 -noInternalSpecs -showNotImplemented <File.java>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>Запуск генерації об’єктного коду з перевіркою виконання контрактів:</p>
            <TerminalSnippet>
                {'java -jar openjml.jar -cp jmlspecs.jar -rac –source 1.7 –target 1.7 -showNotImplemented <File.java>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>Запуск скомпільованого класу на виконання:</p>
            <TerminalSnippet>
                {'java -classpath .;jmlruntime.jar; <File>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>Запуск статичної перевірки коду:</p>
            <TerminalSnippet>
                {'java -jar openjml.jar -cp jmlspecs.jar -esc -source 1.7 <File.java>'}
            </TerminalSnippet>
        </MethodologySection>
    );
}

export default UsingOpenjml;