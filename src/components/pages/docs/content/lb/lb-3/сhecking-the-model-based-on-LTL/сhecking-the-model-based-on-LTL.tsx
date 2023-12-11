import React from 'react';
import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import AccentSpan from "@/components/common/accent-span/accent-span";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image4 from "@/assets/images/lb3/image4.png";
import image5 from "@/assets/images/lb3/image5.png";

const СheckingTheModelBasedOnLtl = () => {
    return (
        <MethodologySection title={"Перевірка коректності моделі на основі LTL"} id={"сheckingTheModelBasedOnLTL"} isFirstSection={false}>
            <p>Перевірка коректності моделі на основі верифікації LTL
                формул полягає в тому, що у виді формули LTL виражається
                деякі властивості її «правильної» поведінки. Всі такі
                властивості повинні бути перевірені по черзі одна за одною.</p>
            <p>Для перевірки моделі на основі LTL введемо до програми
                додаткову змінну accepted, яка буде встановлена у 0 на
                початку запуску і кожного разу, коли повідомлення
                відправляється клієнту. Accepted встановлюється в 1 тільки,
                якщо від клієнта прийшло підтвердження. Тепер можна
                виразити вимогу, що модель коректна, якщо на кожну
                відправку обов’язково прийде підтвердження</p>
            <CodeSnippet title={"Run/LTL Property Manager (рис. 4)."}>
                <code>
                    {`#define getone (accepted == 1)`}
                    <br/>
                    {`#define getzero (accepted == 0)`}
                    <br/>
                    {`[] (getzero -> (getzero U getone))`}
                </code>
            </CodeSnippet>
            <ImageWrapper imgSubtitle={"Вікно верифікації системи"} image={image4} />
            <ImageWrapper imgSubtitle={"Вікно верифікації системи"} image={image5} />
            <p>Зверніть увагу, ми хочемо перевірити, що формула істина
                при всіх виконаннях системи, тому обрано радіокнопку “All
                executions” Тепер натисніть Generate – створиться процесс
                Never Claim, який мовою Promela містить вираження
                введеної формули. Тепер натисніть Run Verification. У полі
                Verification Results буде видано позитивний звіт за
                результатами перевірки: <AccentSpan>valid</AccentSpan></p>
            <CodeSnippet>
                <code>
                    {`unreached in proctype Sender
                        line 14, "pan.__", state 10, "-end-"
                        (1 of 10 states)
                      unreached in proctype Receiver
                        line 23, "pan.__", state 6, "-end-"
                        (1 of 6 states)
                      unreached in proctype :never:
                        line 50, "pain.__", state 14, "-end-"
                        (1 of 14 states)
                    `}
                </code>
            </CodeSnippet>
            <p>Аналогічним чином виконайте індивідуальне завдання.</p>
            <p>Звіт повинен містити код моделі мовою Promela, автомат
                станів моделі, фрагмент симуляції, перелік всіх (на вашу
                думку) необхідних LTL формул для верифікації моделі та
                відповідні їм протоколи (скріншоти екранів).</p>
        </MethodologySection>
    );
};

export default СheckingTheModelBasedOnLtl;