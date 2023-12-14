import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function QuestionsAndTasks() {
    return (
        <MethodologySection
            title={'Контрольні запитання і завдання'}
            id={"questionsAndTasksLb2"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>Опишіть основні принципи логіки предикатів.</li>
                <li>Які існують методи логічного виведення у логіці предикатів?</li>
                <li>Опишіть основні принципи та конструкції динамічної логіки, в чому її принципока відмінність від
                    логіки предикатів?
                </li>
                <li>Перелічте основні можливості KeY</li>
                <li>Перелічте основні обмеження KeY</li>
            </List>
        </MethodologySection>
    );
}

export default QuestionsAndTasks;