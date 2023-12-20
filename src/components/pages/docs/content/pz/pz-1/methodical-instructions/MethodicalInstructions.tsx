import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function MethodicalInstructions() {
    return (
        <MethodologySection
            title={'Методичні вказівки з організації самостійної роботи студентів'}
            id={"methodicalInstructionsPzOne"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Цикли, як правило, є найбільш складною частиною методів, більшість
                помилок пов’язана саме з ними. Під час написання циклів, які працюють
                коректно, вкрай важливо розуміти і використовувати терміни:</p>
            <List type={"Text"}>
                <li className={"font-bold"}>Інваріанта циклу</li>
                <li className={"font-bold"}>Варіанта циклу</li>
            </List>
            <p>Без них не обходиться формальний доказ коректності циклів. Але і
                неформальне розуміння правильності роботи програми засновується на
                цих термінах.</p>
        </MethodologySection>
    )
}

export default MethodicalInstructions;