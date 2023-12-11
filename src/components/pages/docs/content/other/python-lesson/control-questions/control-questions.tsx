import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";

const ControlQuestions = () => {
    return (
        <MethodologySection title={"Контрольні запитання і завдання"}
                            id={"controlQuestions"} isFirstSection={false}>
            <List type={"Number"}>
                <li>В чому полягає суть контрактного програмування.</li>
                <li>Як можна вимкнути PyContracts під час виконання програми? </li>
                <li>Яким чином можна задавати перед та пост умови в PyContracts? Який спосіб вам подобається більше? Чому?</li>
            </List>
        </MethodologySection>
    );
};

export default ControlQuestions;