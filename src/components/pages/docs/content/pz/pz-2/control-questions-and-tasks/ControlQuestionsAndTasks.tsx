import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ControlQuestionsAndTasks() {
    return (
        <MethodologySection
            title={'Контрольні запитання і завдання'}
            id={"controlQuestionsAndTasksPz2"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li>Які темпоральні оператори існують у логіці CTL?</li>
                <li>Які темпоральні оператори існують у логіці LTL?</li>
                <li>Яка різниця між логіками CTL та LTL? Які кожна з них
                    мають переваги та недоліки.
                </li>
                <li>Дайте формальне визначення автомату Бюхі та моделі
                    Кріпке.
                </li>
                <li>Опишіть алгоритм побудови моделі Кріпке за алгоритмом
                    ітеративної програми.
                </li>
                <li>Опишіть алгоритм побудови автомату Бюхі за формулою
                    LTL.
                </li>
                <li>Опишіть алгоритм перевірки формули CTL на моделі
                    Кріпке.
                </li>
                <li>Опишіть алгоритм перевірки формули LTL на моделі
                    Кріпке.
                </li>
            </List>
        </MethodologySection>
    )
}

export default ControlQuestionsAndTasks;