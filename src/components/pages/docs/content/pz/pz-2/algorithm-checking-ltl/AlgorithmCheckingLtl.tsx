import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function AlgorithmCheckingLtl() {
    return (
        <MethodologySection
            title={'Загальний алгоритм перевірки здійсненності формули LTL для структури Кріпке К:'}
            id={"algorithmCheckingLtl"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li>По структурі К будується автомат Бюхі АК. Цей автомат допускає всі
                    можливі обчислення структури К.
                </li>
                <li>По формулі LTL Ф будується автомат Бюхі В Ф, який допускає
                    множину обчислень, які задовольняють Ф.
                </li>
                <li>Будується автомат АК⊗ ВФ. Цей автомат – синхронна композиція
                    автоматів АК і ВФ, допускає перетин мов, які допускає кожен компонент
                    автомата.
                </li>
                <li>Формула Ф виконується для К, якщо і тільки якщо АК⊗ ВФ допускає
                    пусту мову.
                </li>
                <li>Якщо в автоматі АК⊗ ВФ є цикл, який включає приймаючий стан, то
                    мова L АК⊗ ВФ непуста і К не задовольняє Ф.
                </li>
                <p>Детальнішу інформацію щодо Model Checking можна знайти у [2, c. 41-170].</p>
            </List>
        </MethodologySection>
    )
}

export default AlgorithmCheckingLtl;