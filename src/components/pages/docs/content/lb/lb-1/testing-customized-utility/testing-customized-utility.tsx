import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import {java} from "@codemirror/lang-java";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";
import {useTranslation} from "react-i18next";

function TestingCustomizedUtility() {
    const {t} = useTranslation();

    const code = `package com.example.Person;

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
}`;

    const code1 = `package com.example.Person;

public class PersonMain {

    public static void main(String[] argv) {
        System.out.println(new Person(null));
        System.out.println(new Person(""));
    }
}`;
    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.testingCustomizedUtility.label')}
            id={"testingCustomizedUtility"}
            isFirstSection={false}
        >
            <p>{t('docsPage.content.lb.lb1.testingCustomizedUtility.p1')}</p>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.testingCustomizedUtility.p2')}</p>
            <CodeSnippet title={'Person.java'} lang={[java()]}>
                {code}
            </CodeSnippet>
            <CodeSnippet title={'PersonMain.java'} lang={[java()]}>
                {code1}
            </CodeSnippet>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.testingCustomizedUtility.p3')}</p>
            <TerminalSnippet title={t('docsPage.content.lb.lb1.testingCustomizedUtility.p4')}>
                {'java -jar openjml.jar -source 1.7 -noInternalSpecs Person.java PersonMain.java'}
            </TerminalSnippet>
        </MethodologySection>
    );
}

export default TestingCustomizedUtility;