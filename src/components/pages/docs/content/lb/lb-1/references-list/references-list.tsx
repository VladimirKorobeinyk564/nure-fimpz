import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ReferencesList() {
    return (
        <MethodologySection
            title={'Перелік посилань'}
            id={"referencesList"}
            isFirstSection={false}
        >
            <List type={'Number'}>
                <li>Gary T. Leavens, Yoonsik Cheon. Design by Contract with JML. (Draft
                    tutorial for JML in PDF format) [Електронний ресурс] / JML Home Page. –
                    Режим доступу:www/URL: http://www.jmlspecs.org/jmldbc.pdf –
                    19.05.2012 г. – Загол. З екрану.</li>
                <li>David R. Cok The OpenJML User Guide. Draft in progress [Електронний
                    ресурс] / GrammaTech, Inc. – Режим доступу:www/URL:
                    http://jmlspecs.source-forge.net/OpenJMLUserGuide.pdf – 19.05.2012 г. –
                    Загол. з екрану.</li>
                <li>JML Eclipse [Електронний ресурс] / Geeknet, Inc. – Режим
                    доступу:www/URL:
                    http://sourceforge.net/apps/trac/jmlspecs/wiki/JmlEclipse – 19.05.2012 г. –
                    Загол. з екрану.</li>
            </List>
        </MethodologySection>
    );
}

export default ReferencesList;