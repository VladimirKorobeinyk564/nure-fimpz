import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";
import List from "@/components/common/list/List.tsx";

function StepsOfProof() {
    return (
        <MethodologySection
            title={"Кроки доведення"}
            id={"stepsOfProof"}
            isFirstSection={false}
        >
            <TerminalSnippet children={"Inv(x, z) & ! B ==> Post(x, z)"}/>
            <List type={"Number"}>
                <li><TerminalSnippet children={"Pre(x) -> Inv(x,z)"}/></li>
                <li><TerminalSnippet children={"{Inv(x, z)& B} S(x,z){Inv(x,z)}"}/></li>
                <li><TerminalSnippet children={"~B & Inv(x, z) -> Post(x,z)"}/></li>
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