import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";
import chooseStatementForProve from "@/assets/images/lb/lb-2/choose-statement-for-prove.jpg";
import windowBeforeStartRefinement from "@/assets/images/lb/lb-2/window-before-start-refinement.jpg";
import settingKeyAuto1 from "@/assets/images/lb/lb-2/setting-key-auto-1.jpg";
import settingKeyAuto2 from "@/assets/images/lb/lb-2/setting-key-auto-2.jpg";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";

function InstructionsWorkStudents() {
    return (
        <MethodologySection
            title={'Постановка задачі'}
            id={"problemStatement"}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>
                Для роботи знадобиться стабільна версія системи KeY 1.4 та JDK 1.4 або
                вище.
                Для виконання роботи реалізуйте вказане завдання на Java,
                проанотуйте його за допомогою JML та перевірте синтаксичну
                коректність анотацій за допомогою JMLEclipse аналогічно до роботи №1.
            </p>
            <CodeSnippet title={'Запустіть'}>
                Key %KEYROOT%/bin/startProver.bat.
            </CodeSnippet>
            <p className={'mb-[10px]'}>
                Виберіть File/Open та оберіть проанотований файл *.java.
                Псля аналізу коду KeY через вікно Proof Obligation Browser
                запропонує обрати клас, потім метод і бажане твердження
                для доведення (так звані proof obligations). Proof obligations
                формуються на основі анотацій прив’язаних до обраного
                методу та його контексту (інваріантів класу, де знаходиться
                метод). Найбільш часто використовуваними proof obligations
                є PreservesInv, Ensures-Post, RespectModifies.
            </p>
            <p className={'mb-[10px]'}>
                Для тестового прикладу завантажте виданий пакет paycard,
                оберіть клас PayCard.java та метод charge(int amount). Вам
                буде запропоновано декілька тверджень, пов’язаних з цим
                методом, які відповідають обмеженням розкласифікованим в
                анотації як два варіанті нормального або варіант
                помилкового виклику.
            </p>
            <p className={'mb-[10px]'}>
                Для кожного обмеження вказано перед- та пост- умову, та режим доведення (рис. 1).
            </p>
            <div className="image-container flex justify-center">
                <div className={'w-[600px]'}>
                    <ImageWrapper
                        image={chooseStatementForProve}
                        imgSubtitle={'Обрання твердження для доведення'}
                    ></ImageWrapper>
                </div>
            </div>
            <p className={'mb-[10px]'}>
                Оберіть перший варіант normal_behavior. Твердження на Java DL буде завантажено до середовища (рис. 2).
            </p>
            <div className="image-container flex justify-center">
                <div className={'w-[600px]'}>
                    <ImageWrapper
                        image={windowBeforeStartRefinement}
                        imgSubtitle={'Вікно системи перед початком доведення'}
                    ></ImageWrapper>
                </div>
            </div>
            <p className={'mb-[10px]'}>
                На вкладці Proof Search Strategy треба обрати необхідні параметри, які будуть керувати процедурою
                автоматичного доведення твердження, як вказано на рис. 2.3.
            </p>

            <div className="image-container flex justify-center items-center">
                <div className={'w-[620px] mr-[10px]'}>
                    <ImageWrapper
                        image={settingKeyAuto1}
                        imgSubtitle={'Step 1'}
                    ></ImageWrapper>
                </div>
                <div className={'w-[620px] ml-[10px]'}>
                    <ImageWrapper
                        image={settingKeyAuto2}
                        imgSubtitle={'Step 2'}
                    ></ImageWrapper>
                </div>
            </div>
            <p>Налаштування KeY для проведення автоматизованого доведення</p>
            <p>
                Зверніть увагу, що доведення інколи не може буди виконане повністю в автоматичному режимі. Прикладом такого випадку є метод getMaximumRecord класу LogFile. В ньому інваріанта стверджує, що зміння max містить поточне більше значення у частині масиву, що вже була проаналізована до позиції j.
            </p>
            <CodeSnippet>
                {`/* public normal_behaviour
    *  ensures (\\forall int i; 0 <= i && i < logArray.length;
    *       logArray[i].balance <= \\result.balance);
    *  diverges true;
    * */
    public /*pure*/ LogRecord getMaximumRecord() {
        LogRecord max = logArray[0];
        /* loop_invariant
        *    0 <= i && i <= logArray.length
        *    && max != null &&
        *    (\\forall int j; 0 <= j && j < i;
        *    max.balance >= logArray[j].balance);
        *  assignable max, i;
        * */
        while (i < logArray.length) {
            LogRecord lr = logArray[i++];
            if (lr.getBalance() > max.getBalance()) {
                max = lr;
            }
        }

        return max;
    }`}
            </CodeSnippet>
            <p className={'mb-[10px]'}>
                Завантажте твердження EnsuresPost для вказаного методу. Виберіть у якості стратегії стратегії Java DL, а «Loop treatment» встановіть у None, та встановіть флажок «Autoresume strategy» , розпочніть доказ. Якщо б інваріанта була не вказана у коді, то система запросила б під час доказу ввести інваріанту або гіпотезу індукції. Коли більше не буде правил для застосування оберіть цикл while включаючи попередній блок, натисніть кнопку миші та оберіть loopInvariant. Таким чином ви задієте інваріанту та директиву «assignables» в коді. Декілька цілей залишиться відкритими після поновлення стратегії доказу. Перезапустіть стратегії та виконуйте їх доки лише одна ціль залишиться відкритою. Застосуйте зовнішній прувер – натисніть Run Yices (або інший встановлений прувер). Доведення закінчиться успішно.
            </p>
            <p className={'mb-[10px]'}>
                Аналогічним чином виконайте індивідуальне завдання.
            </p>
            <p className={'mb-[10px]'}>
                Звіт повинен містити проанотовану реалізацію класу, хід (історію) доведення кожного твердження в ній. Доказ можна зберегти, обравши Save current proof на панелі.
            </p>
        </MethodologySection>
    );
}

export default InstructionsWorkStudents;