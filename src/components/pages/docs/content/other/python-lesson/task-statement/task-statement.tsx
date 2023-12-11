import MethodologySection from "@/components/common/methodology-section/MethodologySection";

const TaskStatement = () => {
    return (
        <MethodologySection title={"Постановка задачі"}
                            id={"taskStatement"} isFirstSection={false}>
            <p>Спроектуйте інтерфейси або абстрактні класи для сутностей гри.
                Сформулюйте та виразіть на Python інваріанти перед та пост умови для всіх типів та методів.
                Перевірте специфікацію за допомогою PyContracts. Виправте знайдені помилки.
                Перевірте, що всі перед, пост умови та інваріанти насправді виконуються через тестування гри.</p>
        </MethodologySection>
    );
};

export default TaskStatement;