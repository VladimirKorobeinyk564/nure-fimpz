import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ControlQuestionsAndTasks() {
    return (
        <MethodologySection
            title={"Контрольні запитання і завдання"}
            id={"controlQuestionsAndTasks"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li>В чому різниця між логікою висловлювань та логікою
                    предикатів? Яка з двох логік використовується у
                    дедуктивному доведенні коректності програм?</li>
                <li>Перелічіть основні правила логічного висновку у логіці
                    предикатів.</li>
                <li>Дайте формальне визначення частково коректному циклу.</li>
                <li>Дайте формальне визначення повністю коректному циклу.</li>
            </List>
        </MethodologySection>
    )
}

export default ControlQuestionsAndTasks;