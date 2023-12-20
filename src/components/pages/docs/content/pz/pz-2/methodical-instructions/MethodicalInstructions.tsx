import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function MethodicalInstructions() {
    return (
        <MethodologySection
            title={'Методичні вказівки з організації самостійної роботи студентів'}
            id={"methodicalInstructionsPzTwo"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Послідовні програми мають дуже вузьке застосування. Але
                паралельні програми часто нетривіальні, повні помилок і
                тому потрібні технології формальної верифікації таких
                систем. Класична логіка обмежена у вираженні властивостей
                динамічних систем. Тому для верифікації таких систем часто
                використовують спеціальні модальні логіки.</p>
            <p className={"mb-[10px]"}>Наприклад, у класичній логіці неможливо формалізувати такі
                висловлювання:</p>
            <p className={"mb-[10px] text-2xl text-center"}>Ми не друзі, доки ти не вибачишся</p>
            <p className={"text-2xl text-center"}>Запит до ліфта з довільного поверху буде обов'язково задоволений</p>
        </MethodologySection>
    )
}

export default MethodicalInstructions;