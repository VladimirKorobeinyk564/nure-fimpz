import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import MathJax from "react-mathjax2";

function AlgorithmCheckingLtl() {
    return (
        <MethodologySection
            title={'Загальний алгоритм перевірки здійсненності формули LTL для структури Кріпке К:'}
            id={"algorithmCheckingLtl"}
            isFirstSection={false}
        >
            <MathJax.Context input='ascii'>
                <List type={"Number"}>
                    <li>По структурі  <MathJax.Node inline>К</MathJax.Node> будується автомат Бюхі <MathJax.Node inline>AК</MathJax.Node>. Цей автомат допускає всі
                        можливі обчислення структури <MathJax.Node inline>К</MathJax.Node>.
                    </li>
                    <li>По формулі LTL <MathJax.Node inline>Ф</MathJax.Node> будується автомат Бюхі В <MathJax.Node inline>Ф</MathJax.Node>, який допускає
                        множину обчислень, які задовольняють <MathJax.Node inline>Ф</MathJax.Node>.
                    </li>
                    <li>Будується автомат <MathJax.Node inline>А_К⊗ В_Ф</MathJax.Node>. Цей автомат – синхронна композиція
                        автоматів<MathJax.Node inline>А_К</MathJax.Node>і <MathJax.Node inline>В_Ф</MathJax.Node>, допускає перетин мов, які допускає кожен компонент
                        автомата.
                    </li>
                    <li>Формула <MathJax.Node inline>Ф</MathJax.Node> виконується для <MathJax.Node inline>K</MathJax.Node>, якщо і тільки якщо <MathJax.Node inline>А_К⊗ В_Ф</MathJax.Node> допускає
                        пусту мову.
                    </li>
                    <li>Якщо в автоматі <MathJax.Node inline>А_К⊗ В_Ф</MathJax.Node> є цикл, який включає приймаючий стан, то
                        мова <MathJax.Node inline>L А_К⊗ В_Ф</MathJax.Node> непуста і <MathJax.Node inline>K</MathJax.Node> не задовольняє <MathJax.Node inline>Ф</MathJax.Node>.
                    </li>
                    <p>Детальнішу інформацію щодо Model Checking можна знайти у Ю.Г. Карпов Model Checking. Верифікація паралельних та розподілених програмних систем (c. 41-170).</p>
                </List>
            </MathJax.Context>
        </MethodologySection>
    )
}

export default AlgorithmCheckingLtl;