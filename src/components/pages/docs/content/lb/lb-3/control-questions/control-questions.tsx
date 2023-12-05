import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";

const ControlQuestions = () => {
    return (
        <MethodologySection title={"Контрольні запитання і завдання"} id={"controlQuestions"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Дайте визначення темпоральній логіці.</li>
                <li>Які конструкції відрізняють темпоральну логіку від логіки предикатів?</li>
                <li>Які підкласи темпоральних логік існують?</li>
                <li>Дайте визначення моделі Кріпке та автомату Буші, як вони пов’язані
                    між собою.</li>
                <li>Поясніть стратегію перевірки істинності формули логіки СTL.</li>
                <li>Поясніть стратегію перевірки істинності формули логіки LTL.</li>
                <li>Які принципи роботи утиліти xSpin при вірификації моделей програм на
                    основі темпоральної логіки?</li>
            </List>
        </MethodologySection>
    );
};

export default ControlQuestions;