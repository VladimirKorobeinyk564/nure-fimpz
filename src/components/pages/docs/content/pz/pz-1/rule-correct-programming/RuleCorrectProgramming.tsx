import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function RuleCorrectProgramming() {
    return (
        <MethodologySection
            title={"Правило коректного програмування"}
            id={"ruleCorrectProgramming"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Користуватися інваріантами і варіантами циклу потрібно не тільки і
                не стільки для того, щоб проводити формальний доказ коректності
                циклів. Вони сприяють написанню коректних циклів.</p>
            <p className={"mb-[10px]"}>Правило коректного програмування говорить: "При написанні
                кожного циклу програміст повинен визначити його відповідний
                інваріант і варіант".</p>
            <p>Завдання передумов, постумов, варіантів і інваріантів циклів є такою
                ж частиною процесу розробки коректного методу, як і написання
                самого коду.</p>
        </MethodologySection>
    )
}

export default RuleCorrectProgramming;