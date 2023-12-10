import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image1 from "@/assets/images/lb3/image1.png"
import image2 from "@/assets/images/lb3/image2.png"
import image3 from "@/assets/images/lb3/image3.png"

const UsingSpinOnWindows = () => {
    return (
        <MethodologySection title={"Використання Spin на платформі Windows"}
                            id={"usingSpinOnWindows"} isFirstSection={false}>
            <p>Для використання spin на платформі Windows знадобиться наступний мінімальний набір утиліт:</p>
            <List type={"Text"}>
                <li>mingw – windows port GNU компілятора gcc;</li>
                <li>ActiveTcl – інтерпретатор високорівневої мови написання скриптів Tcl/Tk;</li>
                <li>Graphviz – бібліотека для побудови широкого спектру графіків та діаграм;</li>
                <li>Spin – консольна утиліта для інтерпретації програм на Promela;</li>
                <li>xspin – Tcl/Tk скрипт, який реалізує графічну оболонку для
                    полегшення та автоматизації роботи з інтерпретатором Spin.</li>
                <li>Директорії bin всіх утиліти повинні бути включені до системної змінної
                    PATH.</li>
                <li>Синтаксис мови Promellа детально розглядався на лекції та в [1,2].
                    Розглянемо приклад роботи з системою. Для запуску утиліти треба
                    створити та запустити скрипт run.bat наступного змісту:
                    <li className={"ml-[30px]"}>wish -f xspin525.tcl,</li>
                </li>
                <li>де xspin525.tcl – скрипт графічної оболонки. Зовнішній вигляд окна
                    візуальної оболонки наведено на рис. 1.</li>
            </List>
            <ImageWrapper imgSubtitle={"xspin під час роботи"} image={image1} />
            <p>
                Програму можна вводити прямо в редакторі чи завантажити з файла
                *.pml через File/Open. Завантажте до середовища файл altbit.pml. В
                ньому реалізовано протокол альтернуючого біта. В алгоритмі
                альтернуючого біта процес-відправник почерзі відправляє повідомлення,
                помічені то бітом 1, то бітом 0, і очікує відповідні підтвердження.
                Процес-отримувач отримує повідомлення, помічені то бітом 1, то бітом
                0, і відсилає процесу-відправнику підтвердження на них.
            </p>
            <CodeSnippet>
                <code>
                    {'mtype = { msg, ack };/* объявляем два возможных типа сообщения */'}
                    <br/>
                    /* объявляем канал отправителя */
                    <br/>
                    {'chan to_sndr = [2] of { mtype, bit };'}
                    <br/>
                    /* объявляем канал получателя */
                    <br/>
                    {'chan to_rcvr = [2] of { mtype, bit };'}
                    <br/>

                    {`active proctype Sender(){ /* процесс отправителя */
                        again: to_rcvr!msg,1; /* отправляем сообщение, помеченное битом 1 */
                               to_sndr?ack,1; /* получаем подтверждение, помеченное битом 1 */
                               to_rcvr!msg,0; /* отправляем сообщение, помеченное битом 0 */
                               to_sndr?ack,0; /* получаем подтверждение, помеченное битом 0 */
                        goto again
                     }
                     /* процесс получателя */
                     active proctype Receiver() {
                        again: to_rcvr?msg,1; /* получаем сообщение, помеченное битом 1 */
                               to_sndr!ack,1; /* отправляем подтверждение, помеченное битом 1 */
                               to_rcvr?msg,0; /* получаем сообщение, помеченное битом 0 */
                               to_sndr!ack,0; /* отправляем подтверждение, помеченное битом 0 */
                        goto again
                     }`}
                </code>
            </CodeSnippet>
            <p>Перевірте синтаксичну коректність програми, обравши
                Run/Run Syntax Check. У вікно повідомлень повинно
                видатися «no syntax errors». Тепер можна запустити
                симуляцію Run/Set Simulation Parameters (рис. 2)</p>

            <ImageWrapper imgSubtitle={"Вікно налаштування параметрів симуляції"} image={image2} />
            <p>Натисніть Start. Відкриється профіль симуляції, де у вікні
                Simulation Output будуть виводитися повідомлення
                програми, а в Sequence Chart – графічно відображатися граф
                взаємодії процесів(рис. 3). Симуляція підтримує 2 режими:
                покрокова (Single Step) та безперервна (Run).</p>
            <ImageWrapper imgSubtitle={"Профіль симуляції взаємодії процесів"} image={image3} />
        </MethodologySection>
    );
};

export default UsingSpinOnWindows;