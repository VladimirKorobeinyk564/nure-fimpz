import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image1 from "@/assets/images/lb4/image1.png"
import image2 from "@/assets/images/lb4/image2.png"
import image3 from "@/assets/images/lb4/image3.png"
import image4 from "@/assets/images/lb4/image4.png"
import image5 from "@/assets/images/lb4/image5.png"
import image6 from "@/assets/images/lb4/image6.png"
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet";

const ExampleOfPyContractsOnUbuntu = () => {
    return (
        <MethodologySection title={"Приклад встановлення та використання PyContracts на Ubuntu:"}
                            id={"exampleOfPyContractsOnUbuntu"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Перевіряємо наявність менеджеру пакетів pip3. Встановлюємо pip3, якщо він відсутній в системі:
                    <TerminalSnippet>pip3 --version</TerminalSnippet>
                    <ImageWrapper imgSubtitle={"pip3 є в системі, встановлювати його не треба"} image={image1} />
                    <TerminalSnippet>sudo apt update</TerminalSnippet>
                    <ImageWrapper image={image2} />
                    <TerminalSnippet>sudo apt install python3-pip</TerminalSnippet>
                    <ImageWrapper image={image3} />
                </li>
                <li>
                    Створимо віртуальне середовище та активуємо його:
                    <TerminalSnippet>pip install virtualenv</TerminalSnippet>
                    <TerminalSnippet>{`python<version> -m venv <virtual-environment-name>`}</TerminalSnippet> Для запуску на Python 3.9 з папкою для віртуального середовища env:
                    <TerminalSnippet>python3.9 -m venv env</TerminalSnippet>
                    <TerminalSnippet>source env/bin/activate</TerminalSnippet>
                    <ImageWrapper imgSubtitle={"Зверніть увагу, що після виконання команди source env/bin/activate біля на початку командного рядку з’явився напис “(env)”. Це означає що ми активували віртуальне середовище і зараз знаодимось в ньому."} image={image4} />
                </li>
                <li>Встановлюємо PyContracts:
                    <TerminalSnippet>pip install PyContracts3==3.0.2</TerminalSnippet>
                    <ImageWrapper imgSubtitle={"WARNING можна проігнорувати, так як він свідчить про те, що є більш актуальна версія pip, яку можна оновити виконавши вказану команду. Для подальшого виконання завдання його можна ігнорувати."} image={image5} />
                </li>
                <li>Для перевірки, зайдемо в інтерактивний режим інтерпретатора та імпортуємо PyContracts3:
                    <TerminalSnippet>from contracts import contract</TerminalSnippet>
                    <ImageWrapper imgSubtitle={"Якщо немає помилки, то ми успішно встановили пакет PyContracts3 і можемо його використовувати для роботи."} image={image6} />
                </li>
            </List>
        </MethodologySection>
    );
};

export default ExampleOfPyContractsOnUbuntu;