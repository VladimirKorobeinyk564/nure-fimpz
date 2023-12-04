import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ProblemStatement() {
    return (
        <MethodologySection
            title={'Постановка задачі'}
            id={"problemStatement"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>Спроектуйте інтерфейси або абстрактні класи для сутностей
                    гри.
                </li>
                <li>Сформулюйте та виразіть на jml інваріанти перед та
                    пост умови для всіх типів та методів.
                </li>
                <li>Перевірте jml-специфікацію за допомогою статичного аналізатору коду.</li>
                <li>Виправте знайдені помилки. Перевірте, що всі перед, пост
                    умови та інваріанти насправді виконуються через тестування
                    гри.
                </li>
            </List>
        </MethodologySection>
    );
}

export default ProblemStatement;