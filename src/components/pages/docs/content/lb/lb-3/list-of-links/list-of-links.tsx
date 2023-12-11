import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";

const ListOfLinks = () => {
    return (
        <MethodologySection title={"Перелік посилань"} id={"listOfLinks"} isFirstSection={false}>
            <List type={"Number"}>
                <li>Шошмина, И.В. Введение в язык Promela и систему
                    комплексной верификации Spin [Текст] / И.В. Шошмина, Ю.
                    Г. Карпов; Санкт-Петербургский государственный
                    политехнический университет. – СПб:Университет, 2009 г. –
                    66 с.</li>
                <li>G. Holzmann The Spin Model Checker: Primer and
                    Reference Manual [Електронний ресурс] / SPIN HomePage /
                    Режим доступу: www/URL:<a href={"http://spinroot.com/spin/Doc/Book_extras"} className={"text-primary-color"}>http://spinroot.com/spin/Doc/Book_extras</a> – 19.05.2012 г. –
                    Загол. з екрану.</li>
            </List>
        </MethodologySection>
    );
};

export default ListOfLinks;