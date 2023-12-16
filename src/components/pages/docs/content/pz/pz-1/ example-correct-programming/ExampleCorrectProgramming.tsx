import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function ExampleCorrectProgramming() {
    return (
        <MethodologySection
            title={"Приклад"}
            id={"exampleCorrectProgramming"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Чи важко будувати інваріанти і варіанти циклу? Необхідна певна
                практика, але зазвичай розуміння алгоритму означає і розуміння
                інваріантів, які забезпечують коректність роботи алгоритму. Розглянемо
                простий приклад, нехай є цикл:</p>
            <CodeSnippet children={"S=0\n" +
                "\n" +
                "for(int i=0; i<n ; i++)\n" +
                "\n" +
                "S = S*i/(i+1)+a[i]/(i+1);"}/>
            <p className={"mb-[10px]"}>Стверджується, що цей цикл обчислює середнє арифметичне елементів масиву.
                Необхідно довести або спростувати це.</p>
            <p className={"mb-[10px]"}>Визначимо Pre(S,n,i): S=0 && n ≥ 0 && i=0</p>
        </MethodologySection>
    )
}

export default ExampleCorrectProgramming;