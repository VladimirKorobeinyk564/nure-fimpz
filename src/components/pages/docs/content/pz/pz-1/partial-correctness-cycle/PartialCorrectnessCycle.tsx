import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";

function PartialCorrectnessCycle() {
    return (
        <MethodologySection
            title={'Доведення часткової коректності циклу'}
            id={"partialCorrectnessCycle"}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>Розглянемо цикл у формі, до якої можна привести всі види циклів: x –
                входи, z-виходи:</p>
            <TerminalSnippet children={"Init(x,z); while(B)S(x,z);"}/>
            <p className={'mb-[10px] font-bold'}>Тут:</p>
            <List type={"Text"}>
                <li>B — умова циклу while</li>
                <li>S - його тіло</li>
                <li>а Init - група попередніх операторів, яка задає ініціалізацію цикла</li>
            </List>
            <p>Реально, жоден цикл не обходиться без фрагменту ініціалізації. Синтаксично
                було б правильно, щоб Init був би формально частиною оператора циклу. В
                операторі for це частково зроблено – ініціалізація лічильників є частиною циклу.</p>
        </MethodologySection>
    )
}

export default PartialCorrectnessCycle;