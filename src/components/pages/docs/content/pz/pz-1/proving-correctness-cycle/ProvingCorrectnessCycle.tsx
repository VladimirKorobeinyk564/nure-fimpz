import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";


function ProvingCorrectnessCycle() {
    return (
        <MethodologySection
            title={"Доведення повної коректності циклу"}
            id={"provingCorrectnessCycle"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>З циклом пов'язане ще одне важливе поняття – варіанти циклу, що
                використовується для доказу того, що цикл завершиться.</p>
            <p className={"mb-[10px]"}>Визначення 1.2 (варіанта циклу). Цілочисельний невід'ємний вираз Var
                (x, z) називається варіантом циклу, якщо виконується наступна тріада:</p>
            <CodeSnippet children={"\n" + "{(Var(x,z)= n) & B} S(x,z){(Var(x,z)= m) & (m < n)}" + "\n"}/>
            <p className={"mb-[10px]"}>Змістовно це означає, що кожне виконання тіла циклу призводить до зменшення
                значення його варіанти. Після кінцевого числа кроків варіант досягає своєї
                нижньої межі, і цикл завершується. Найпростішим прикладом варіанти циклу є
                вираз (n - i) для циклу виду:</p>
            <CodeSnippet children={"\nfor(i = 1; i <= n; i++) S(x, z);\n"}/>
            <p className={"mb-[10px]"}>Цикл, для якого доведено твердження (1.1) та (1.2) <span className={"font-bold"}>є повністю
                коректним.</span></p>
        </MethodologySection>
    )
}

export default ProvingCorrectnessCycle;