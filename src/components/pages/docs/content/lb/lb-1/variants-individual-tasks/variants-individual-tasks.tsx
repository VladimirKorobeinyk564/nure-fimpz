import List from "@/components/common/list/List.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function VariantsIndividualTasks() {
    return (
        <MethodologySection
            title={'Варіанти індивідуальних завдань'}
            id={"variantsIndividualTasks"}
            isFirstSection={false}
        >
            <List type={'Text'}>
                <li>Варіант 1. Гра «Сапер».</li>
                <li>Варіант 2. Гра «Шашки».</li>
                <li>Варіант 3. Гра «П’ятнашки».</li>
                <li>Варіант 4. Гра «Морський бій».</li>
                <li>Варіант 5. Гра «Хрестики-нуліки».</li>
                <li>Варіант 6. Гра «Шарики».</li>
                <li>Варіант 7. Гра «Піддавки».</li>
            </List>
        </MethodologySection>
    );
}

export default VariantsIndividualTasks;