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

const ExampleOfPyContractsOnUbuntu = () => {
    return (
        <MethodologySection title={"Приклад встановлення та використання PyContracts на Ubuntu:"}
                            id={"exampleOfPyContractsOnUbuntu"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Перевіряємо наявність менеджеру пакетів pip3. Встановлюємо pip3, якщо він відсутній в системі:
                    <CodeSnippet>pip3 --version</CodeSnippet>
                    <ImageWrapper imgSubtitle={"pip3 є в системі, встановлювати його не треба"} image={image1} />
                    <CodeSnippet>sudo apt update</CodeSnippet>
                    <ImageWrapper image={image2} />
                    <CodeSnippet>sudo apt install python3-pip</CodeSnippet>
                    <ImageWrapper image={image3} />
                </li>
                <li>
                    Створимо віртуальне середовище та активуємо його:
                    <CodeSnippet>pip install virtualenv</CodeSnippet>
                    <CodeSnippet>{`python<version> -m venv <virtual-environment-name>`}</CodeSnippet> Для запуску на Python 3.9 з папкою для віртуального середовища env:
                    <CodeSnippet>python3.9 -m venv env</CodeSnippet>
                    <CodeSnippet>source env/bin/activate</CodeSnippet>
                    <ImageWrapper imgSubtitle={"Зверніть увагу, що після виконання команди source env/bin/activate біля на початку командного рядку з’явився напис “(env)”. Це означає що ми активували віртуальне середовище і зараз знаодимось в ньому."} image={image4} />
                </li>
                <li>Встановлюємо PyContracts:
                    <CodeSnippet>pip install PyContracts3==3.0.2</CodeSnippet>
                    <ImageWrapper imgSubtitle={"WARNING можна проігнорувати, так як він свідчить про те, що є більш актуальна версія pip, яку можна оновити виконавши вказану команду. Для подальшого виконання завдання його можна ігнорувати."} image={image5} />
                </li>
                <li>Для перевірки, зайдемо в інтерактивний режим інтерпретатора та імпортуємо PyContracts3:
                    <CodeSnippet>from contracts import contract</CodeSnippet>
                    <ImageWrapper imgSubtitle={"Якщо немає помилки, то ми успішно встановили пакет PyContracts3 і можемо його використовувати для роботи."} image={image6} />
                </li>
            </List>
        </MethodologySection>
    );
};

export default ExampleOfPyContractsOnUbuntu;