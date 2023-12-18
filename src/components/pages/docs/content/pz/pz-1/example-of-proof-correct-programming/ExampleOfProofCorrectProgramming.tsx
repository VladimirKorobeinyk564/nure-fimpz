import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import MathExpression from "@/components/common/math-expression/MathExpression.tsx";
import List from "@/components/common/list/List.tsx";
import MathJax from 'react-mathjax2'

function ExampleOfProofCorrectProgramming() {
    return (
        <MethodologySection
            title={"Приклад доведення"}
            id={"exampleOfProofCorrectProgrammingPzOne"}
            isFirstSection={false}
        >
            <List type={"Number"}>
                <li className={"text-2xl mb-[10px]"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}><MathJax.Node inline>{`Pre(x) => Inv(x,z)`}</MathJax.Node></div>
                    </MathJax.Context>
                    <MathExpression
                        children={"n≥0 && i=0 =>  S=sum_(k=0)^(i-1)((a[k])/i)≡S=sum_(k=0)^(-1)((a[k])/0)≡S=0"}/>
                </li>
                <li className={"text-2xl mb-[10px]"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}>
                            <MathJax.Node inline>{`{Inv(x, z)& B} [S(x,z)]{Inv(x,z)}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathExpression className={"pb-0 rounded-b-none"}
                                    children={"{(S=sum_(k=0)^(i-1)((a[k])/i)) && (i<n)}[S=(a[i])/(i+1)+S*i/(i+1);i++;] => S=sum_(k=0)^(i-1)((a[k])/i)"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(a[i])/(i+1)+(sum_(k=0)^(i-1)a[k])/i*i/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(a[i])/(i+1)+(sum_(k=0)^(i-1)a[k])/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"pb-0 rounded-none"}
                                    children={"S=(sum_(k=0)^(i)a[k])/(i+1);i++;=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                    <MathExpression className={"rounded-t-none"}
                                    children={"S=(sum_(k=0)^(i-1)a[k])/i=>S=sum_(k=0)^(i-1)(a[k])/i"}/>
                </li>
                <li className={"text-2xl"}>
                    <MathJax.Context input='ascii'>
                        <div className={"mb-[10px]"}>
                            <MathJax.Node inline>{`~B & Inv(x, z) -> Post(x,z)`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <p className={"mb-[10px] font-normal text-lg"}>Вочевидь, що</p>
                    <MathExpression children={"(i=n)&&(S=sum_(k=0)^(i-1)(a[k])/i)=>S=sum_(k=0)^(n-1)(a[k])/n"}/>
                    <p className={"my-[10px] font-normal text-lg"}>Цикл дійсно обчислює середнє арифметичне у
                        масиві.</p>
                    <p className={"font-normal text-lg"}>Детальнішу інформацію щодо теорії доведення коректності
                        ітеративних
                        програм
                        можна знайти у [1, c. 25-138].</p>
                </li>
            </List>
        </MethodologySection>
    )
}

export default ExampleOfProofCorrectProgramming;