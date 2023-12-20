import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function ExampleStatementCtlLogic() {
    return (
        <MethodologySection
            title={'Приклад висловлювання в логіці CTL'}
            id={"exampleStatementCtlLogic"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>{"EF( int > 0.01) – Не існує такого режиму роботи, при якому інтенсивність опромінення пацієнта перевищує 0.01 радіан в сек."}</p>
        </MethodologySection>
    )
}

export default ExampleStatementCtlLogic;