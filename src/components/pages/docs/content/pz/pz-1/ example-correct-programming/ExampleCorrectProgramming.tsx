import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";
import MathJax from "react-mathjax2";

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
            <div className={"mb-[10px] flex"}>
            <span className={"mr-1"}>Визначимо</span>
                <MathJax.Context input='ascii'>
                    <div>
                        <MathJax.Node>{`Pre(S,n,i): S=0 && n ≥ 0 && i=0`}</MathJax.Node>
                    </div>
                </MathJax.Context>
            </div>
            <MathExpression className={"pb-0 rounded-b-none"} children={"Post(S,a,n): S=sum_(k=0)^(n-1)((a[k])/n)"}/>
            <MathExpression className={"rounded-t-none"} children={"Inv(S,a,i): S=sum_(k=0)^(i-1)((a[k])/i)"}/>
        </MethodologySection>
    )
}

export default ExampleCorrectProgramming;