import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

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

            <CodeSnippet>
                <code>
                    openjml.localSetup=
                    <br/>
                    openjml.defaultProver=yices
                    <br/>
                    openjml.prover.yices= d:/users/openjml/yices/bin/yices.exe
                </code>
            </CodeSnippet>

            <p>Правила користування утилітою детально описані в мануалі [2, 6-12].</p>
            <p>Наведемо лише основні команди.</p>

            <p className={'mb-[10px]'}>Запуск перевірки синтаксису анотацій:</p>
            <CodeSnippet title={'Для jdk 1.7'}>
                <code>{'java -jar openjml.jar -source 1.7 -noInternalSpecs <File.java>'}</code>
            </CodeSnippet>
            <CodeSnippet title={'Для jdk 1.6'}>
                <code>{'java -Xbootclasspath/p:d:\\users\\openjml/openjmlboot.jar -jar\n' +
                    'openjml.jar -source 1.7 -noInternalSpecs -showNotImplemented\n' +
                    '<File.java>'}</code>
            </CodeSnippet>
            <p className={'mb-[10px]'}>Запуск генерації об’єктного коду з перевіркою виконання контрактів:</p>
            <CodeSnippet>
                <code>{'java -jar openjml.jar -cp jmlspecs.jar -rac –source 1.7 –target 1.7 -\n' +
                    'showNotImplemented <File.java>'}</code>
            </CodeSnippet>
            <p className={'mb-[10px]'}>Запуск скомпільованого класу на виконання:</p>
            <CodeSnippet>
                <code>{'java -classpath .;jmlruntime.jar; <File>'}</code>
            </CodeSnippet>
            <p className={'mb-[10px]'}>Запуск статичної перевірки коду:</p>
            <CodeSnippet>
                <code>{'java -jar openjml.jar -cp jmlspecs.jar -esc -source 1.7 <File.java>'}</code>
            </CodeSnippet>
        </MethodologySection>
    );
}

export default UsingOpenjml;