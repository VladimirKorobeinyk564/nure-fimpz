import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";

const TheMainIdeaContractProgramming = () => {
    return (
        <MethodologySection title={"Основна ідея контрактного програмування"}
                            id={"theMainIdeaContractProgramming"} isFirstSection={false}>
            <p>
                Основна ідея контрактного програмування — модель взаємодії елементів програмної системи на основі взаємних зобов'язань та вигод. Це метафора із бізнесу, де «клієнт» та «постачальник» укладають «контракт», що описує наступну поведінку:
            </p>
            <List type={"Text"}>
                <li>коли «клієнт» використовує «постачальника», то «клієнт» зобов'язаний задовольнити передумови, це є вигодою «постачальника», оскільки звільняє його від виконання контракту в протилежному випадку;</li>
                <li>гарантування виконання післяумови є зобов'язанням «постачальника», та є вигодою «клієнта»;</li>
                <li>виконання деякої умови на початку і в кінці є гарантуванням збереження інваріанта.</li>
            </List>
            <p>Python не підтримує контрактне програмування за замовчуванням. З 2003 року, для Python є пропозиція додати нативну підтримку програмування за контрактом. Вона виражена в PEP 316 [1]. В останні роки вона почала активно оновлюватись і доповнюватись.</p>
            <p>Проте, є купа готових пакетів, які дозволяють реалізувати програмування за контрактом. До таких відносяться:</p>
            <List type={"Text"}>
                <li>PyContracts - <a href={"https://pypi.org/project/PyContracts3/3.0.2/"} className={"text-primary-color"}>https://pypi.org/project/PyContracts3/3.0.2/</a>. Оновлення - Jul 13, 2020</li>
                <li>dpcontracts - <a href={"https://pypi.org/project/dpcontracts/"} className={"text-primary-color"}>https://pypi.org/project/dpcontracts/</a>. Оновлення - 2018 рік</li>
                <li>icontract - <a href={"https://pypi.org/project/icontract/"} className={"text-primary-color"}>https://pypi.org/project/icontract/</a>. Оновлення - 2022 рік</li>
            </List>
        </MethodologySection>
    );
};

export default TheMainIdeaContractProgramming;