import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function OperatorsSection() {
    return (
        <MethodologySection
            title={'Оператори'}
            id={"operatorsSection"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Для таких цілей у модальних логіках застосовують наступні нові оператори:</p>
            <List type={"Text"}>
                <li><span className={"font-bold"}>F</span>q – q трапиться коли-небудь у майбутньому.</li>
                <li><span className={"font-bold"}>P</span>q – q траплялося коли-небудь у минулому.</li>
                <li><span className={"font-bold"}>G</span>q – q завжди буде у майбутньому.</li>
                <li><span className={"font-bold"}>Н</span>q – q завжди було у минулому.</li>
                <li>p<span className={"font-bold"}>U</span>q – q трапиться в майбутньому, а до нього безперервно буде
                    вико-нуватися р.
                </li>
                <li><span className={"font-bold"}>Х</span>p – р виконається у наступний момент.</li>
            </List>
        </MethodologySection>
    )
}

export default OperatorsSection;