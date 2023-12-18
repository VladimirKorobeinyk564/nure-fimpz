import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function StepsOfProof() {
    return (
        <MethodologySection
            title={"Кроки доведення"}
            id={"stepsOfProof"}
            isFirstSection={false}
        >
            <CodeSnippet children={"\n" + "Inv(x, z) & ! B ==> Post(x, z)" + "\n"}/>
            <List type={"Number"}>
                <li><CodeSnippet children={"\n" + "Pre(x) -> Inv(x,z)" + "\n"}/></li>
                <li><CodeSnippet children={"\n" + "{Inv(x, z)& B} S(x,z){Inv(x,z)}" + "\n"}/></li>
                <li><CodeSnippet children={"\n" + "~B & Inv(x, z) -> Post(x,z)" + "\n"}/></li>
            </List>
            <p className={'mb-[10px]'}>Щоб довести п.(б) необхідно виконати наступні кроки:</p>
            <List type={"Text"}>
                <li>Крок 1. Довести, що Inv(x, z) виконується перед першою
                    ітерацією циклу - база індукції.
                </li>
                <li>Крок 2. Індуктивний крок: довести, що для будь-якого
                    позитивного n інваріанта виконується після n-ї ітерації
                    циклу. Тобто якщо інваріанта виконувалася після (n-1)
                    кроку, то вона буде виконана після n-го кроку.
                </li>
            </List>
        </MethodologySection>
    )
}

export default StepsOfProof;