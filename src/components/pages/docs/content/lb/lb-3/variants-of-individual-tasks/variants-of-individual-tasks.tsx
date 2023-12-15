import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import AccentSpan from "@/components/common/accent-span/accent-span";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import {python} from "@codemirror/lang-python";

const VariantsOfIndividualTasks = () => {
    const code = `proctype user(chan mgr) { /* user process in cluster */
    req: mgr!P; /* request access from local manager */
    mgr?G: /* gain access */
    progress:
    cs: count++;
    assert(count == 1);
    count--;
    mgr!V; /* release access */
    out:
    skip;
    goto req
}`
    return (
        <MethodologySection title={"Варіанти індивідуальних завдань"} id={"variantsOfIndividualTasks"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Студент/Автомат з видачі напоїв;</li>
                <li>Банкомат/користувач</li>
                <li>Алгоритм знаходження НОД</li>
                <li>Моделювання взаємодії процесів з N розподілених
                    кластерів для забезпечення ексклюзивного доступу процесів
                    до спільного ресурсу.
                    <div>
                        <p><AccentSpan>Пояснення</AccentSpan>. N кластерів з M процесами користувачів на кожному та по
                            одному процесу менеджеру на кластер. Загальний опис ідеї протоколу:
                            коли процес-користувач хоче отримати доступ до ресурсу, він подає
                            заявку своєму менеджеру та чекає на надання доступу, користується ним
                            та повинен сповістити менеджера, коли ресурс звільниться. Менеджери
                            взаємодіють один з одним, щоб контролювати/надати кожного моменту
                            часу лише одному клієнту доступ до ресурсу. Менеджер, який
                            ексклюзивно володіє ресурсом, тримає так званий віртуальний токен,
                            який він передає клієнту за запитанням. Менеджер, який отримує заявку
                            клієнта, але не має віртуального точена повинен запросити його у інших
                            менеджерів.</p>
                        <CodeSnippet lang={[python()]} title={"Прикад заготовки процесу-клієнту наведено нижче:"}>
                            {code}
                        </CodeSnippet>
                        <List type={"Text"}>
                            <li>Додайте всі необхідні складові (інші процеси, необхідні глобальні та
                                локальні змінні), щоб моделювання стало можливим. Створіть два
                                кластера і по 2 процеси-клієнти на кожному.</li>
                            <li>Докажіть на створеній системі наступні правила:
                                <List type={"Text"}>
                                    <li>тільки один процес може одночасно звертатися до ресурсу;</li>
                                    <li>відсутність голодування (якщо клієнт запросив ресурс, то рано чи
                                        пізно він його отримає).</li>
                                </List>
                            </li>
                        </List>
                    </div>
                </li>
                <li>Криптографічний протокол Нідхама-Шредера. Реалізувати
                    протокол, ввести третю сторону (зловмісника) та довести
                    можливість зовнішньої атаки (зловмисник дізнається секрет
                    одної із сторін).</li>
            </List>
        </MethodologySection>
    );
};

export default VariantsOfIndividualTasks;