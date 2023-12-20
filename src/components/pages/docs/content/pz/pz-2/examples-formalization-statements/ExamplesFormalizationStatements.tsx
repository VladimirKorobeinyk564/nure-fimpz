import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ExamplesFormalizationStatements() {
    return (
        <MethodologySection
            title={'Приклади формалізації висловлювань'}
            id={"examplesFormalizationStatements"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}><span className={"font-bold"}>P</span> (Джон_вмирає /\ <span
                className={"font-bold"}>XF</span> Джона_ховають) = Джон вмирає і його
                поховали</p>
            <p><span className={"font-bold"}>PG</span> Ленін_живий</p>
            <List type={"Text"}>
                <li>Ленін – жив, Ленін – живий, Ленін – буде жити (В.В.
                    Маяковський)
                </li>
            </List>
            <p><span className={"font-bold"}>G</span> {`(Персіл =>`} <span className={"font-bold"}>G</span> Персіл)</p>
            <List type={"Text"}>
                <li>Раз Персіл – завжди Персіл (спробувавши одного разу,
                    будете користуватися завжди)</li>
            </List>
        </MethodologySection>
    )
}

export default ExamplesFormalizationStatements;