import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function VariantsIndividualTasks() {
    return (
        <MethodologySection
            title={'Варіанти індивідуальних завдань'}
            id={"variantsIndividualTasksLb2"}
            isFirstSection={false}
        >
            <List type={'Text'}>
                <li>Варіант 1. АТД Стек.</li>
                <li>Варіант 2. АТД Черга.</li>
                <li>Варіант 3. АТД Множина.</li>
                <li>Варіант 4. АТД Черга з приорітетами.</li>
                <li>Варіант 5. Сортування вставками.</li>
                <li>Варіант 6. Бінарний пошук.</li>
                <li>Варіант 7. Швидке сортування.</li>
                <li>Варіант 8. Сума, мінімум та максимум у масиві.</li>
            </List>
        </MethodologySection>
    );
}

export default VariantsIndividualTasks;