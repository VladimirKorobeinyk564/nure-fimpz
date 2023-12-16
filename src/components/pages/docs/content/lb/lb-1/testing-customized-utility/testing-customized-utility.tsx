import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import {java} from "@codemirror/lang-java";

function TestingCustomizedUtility() {
    const code = `
                        package com.example.Person;

public class Person {
    private /* spec_public non_null */ String name;
    private /* spec_public */ int weight;

    /* public invariant !name.equals("") && weight >= 0 */

    /* also
    *  ensures \\result != null && (* \\result is a displayable from of this person *);
    */
    public String toString() {
        return "Person(\\"" + name + "\\"," + weight + ")";
    }

    /* also
    *  ensures \\result == weight;
    */
    public /* pure */ int getWeight() {
        return weight;
    }

    /* also
    *  requires kgs >= 0;
    *  requires weight + kgs >=
    *  ensures weight == \\old(weight + kgs);
    */
    public void addKgs(int kgs) {
        if (kgs >= 0) {
            weight += kgs;
        } else {
            throw new IllegalArgumentException();
        }
    }

    /* also
    *  requires n != null && !n.equals("");
    *  ensures n.equals(name) && weight == 0;
    */
    public Person(String n) {
        name = n;
        weight = 0;
    }
}

                        `;

    const code1 = `
                        package com.example.Person;

public class PersonMain {

    public static void main(String[] argv) {
        System.out.println(new Person(null));
        System.out.println(new Person(""));
    }
}

                        `;
    return (
        <MethodologySection
            title={'Тестування налаштованої утиліти'}
            id={"testingCustomizedUtility"}
            isFirstSection={false}
        >
            <p>Синтаксис JML детально описано в мануалі [1, c. 4-8].</p>
            <p className={'mb-[10px]'}>Для тестування налаштованої утиліти створіть файли наступного вмісту:</p>
            <CodeSnippet title={'Person.java'} lang={[java()]}>
                {code}
            </CodeSnippet>
            <CodeSnippet title={'PersonMain.java'} lang={[java()]}>
                {code1}
            </CodeSnippet>
            <p className={'mb-[10px]'}>Виконайте для файлів всі наведені команди по черзі.</p>
            <CodeSnippet title={'Проаналізуйте результат'} lang={[java()]}>
                {'java -jar openjml.jar -source 1.7 -noInternalSpecs Person.java PersonMain.java'}
            </CodeSnippet>
        </MethodologySection>
    );
}

export default TestingCustomizedUtility;