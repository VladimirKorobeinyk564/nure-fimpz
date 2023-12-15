import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";

const InstallingPyContractsOnWindows = () => {
    return (
        <MethodologySection title={"Приклад встановлення та використання PyContracts на Windows:"}
                            id={"installingPyContractsOnWindows"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Завантажуємо стабільний реліз Python з офіційного сайту:
                    <a href={"https://www.python.org/downloads/windows/"} className={"text-primary-color"}>https://www.python.org/downloads/windows/</a>. В нашому випадку обираємо Python 3.11.0.
                </li>
                <li>
                    Завантажуємо Windows installer (32-bit), якщо ви використовуєте 32-розрядну програму встановлення.
                    Якщо ваша Windows є 64-розрядною системою, завантажуємо Windows installer (64-bit).
                </li>
                <li>
                    Запускаємо програму установки, обираємо кастомізоване встановлення, обираємо додатково pip та py launcher.
                    Натискаємо далі.
                </li>
                <li>
                    В Advanced options встановлюємо прапорці «Встановити для всіх користувачів» і «Додати Python до змінних середовища».
                    Звертаємо увагу на каталог встановлення Python, який відображається на цьому кроці.
                    В нашому випадку це C:\Users\Python. Після вибору додаткових параметрів натискаємо «Встановити».
                </li>
                <li>
                    Після цього в cmd.exe перевіряємо Python. Для цього пишемо python або python3.
                    Якщо відкрилась консоль Python, то все працює.
                </li>
                <li>
                    Встановлюємо virtualenv та створюємо робоче оточення. Для цього в cmd.exe виконуємо наступні команди:
                    <List type={"Text"}>
                        <li><CodeSnippet>pip install virtualenv</CodeSnippet></li>
                        <li><CodeSnippet>virtualenv env</CodeSnippet></li>
                        <li><CodeSnippet>env\Scripts\activate</CodeSnippet></li>
                    </List>
                </li>
                <li>
                    Встановлюємо PyContracts:
                    <CodeSnippet>pip install PyContracts3==3.0.2</CodeSnippet>
                </li>
                <li>
                    Для використання пакету імпортуємо його в файл:  from contracts import contract
                </li>
            </List>
        </MethodologySection>
    );
};

export default InstallingPyContractsOnWindows;