import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function BuhiAutomaton() {
    return (
        <MethodologySection
            title={'Автомат Бюхі'}
            id={"buhiAutomaton"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}><span className={"font-bold"}>Автомат Бюхі</span> – це синтаксично – той же
                кінцевий автомат, з тією різницею, що кінцевим станам в ньому приписується інший сенс.</p>
            <p>Ланцюжок допускається автоматом Бюхі, якщо і тільки якщо існує заключний стан автомата, який проходиться
                нескінченне число разів при прийомі цього ланцюжка.</p>
        </MethodologySection>
    )
}

export default BuhiAutomaton;