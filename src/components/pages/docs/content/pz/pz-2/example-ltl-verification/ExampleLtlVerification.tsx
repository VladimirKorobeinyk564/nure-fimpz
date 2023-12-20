import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function ExampleLtlVerification() {
    return (
        <MethodologySection
            title={'Приклад перевірки LTL формули'}
            id={"exampleLtlVerification"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Для перевірки LTL формули використовується інша тактика:</p>
            <p className={"mb-[10px]"}>якщо потрібно перевірити, чи виконується на розгортці
                структури Кріпке LTL формула Ф, то достатньо перевірити,
                чи є контрприклади, тобто перевірити, чи є обчислення, що
                задовольняють Ф. Для цього опишемо у вигляді автомата
                Бюхі всі поведінки, які НЕ задовольняють Ф. Перевіримо, чи
                перетину цього автомата з автоматом Бюхі, що описує
                алгоритм, який перевіряється.</p>
        </MethodologySection>
    )
}

export default ExampleLtlVerification;