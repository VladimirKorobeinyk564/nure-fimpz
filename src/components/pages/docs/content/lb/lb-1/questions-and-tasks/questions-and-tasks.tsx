import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function QuestionsAndTasks() {
    return (
        <MethodologySection
            title={'Контрольні запитання і завдання'}
            id={"questionsAndTasks"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>Перелічіть основні конструкції jml.</li>
                <li>Перелічіть основні задачі openjml.</li>
                <li>Які утиліти входять до OpenJml та яке призначення кожної з
                    них?</li>
            </List>
        </MethodologySection>
    );
}

export default QuestionsAndTasks;