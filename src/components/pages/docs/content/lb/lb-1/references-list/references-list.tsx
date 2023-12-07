import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ReferencesList() {
    return (
        <MethodologySection
            title={'Перелік посилань'}
            id={"referencesList"}
            isFirstSection={false}
        >
            <div className="mb-[40px]">
                <List type={'Number'}>
                    <li>Gary T. Leavens, Yoonsik Cheon. Design by Contract with JML. (Draft tutorial for JML in PDF format) [Електронний ресурс] / JML Home Page. – Режим доступу:www/URL: <a className={'text-primary-color hover:underline'} href={'http://www.jmlspecs.org/jmldbc.pdf'}>http://www.jmlspecs.org/jmldbc.pdf</a> – 19.05.2012 г. – Загол. З екрану.</li>
                    <li>David R. Cok The OpenJML User Guide. Draft in progress [Електронний ресурс] / GrammaTech, Inc. – Режим доступу:www/URL: <a className={'text-primary-color hover:underline'} href={'http://jmlspecs.source-forge.net/OpenJMLUserGuide.pdf'}>http://jmlspecs.source-forge.net/OpenJMLUserGuide.pdf</a> – 19.05.2012 г. – Загол. з екрану.</li>
                    <li>JML Eclipse [Електронний ресурс] / Geeknet, Inc. – Режим доступу:www/URL: <a className={'text-primary-color hover:underline'} href={'http://sourceforge.net/apps/trac/jmlspecs/wiki/JmlEclipse'}>http://sourceforge.net/apps/trac/jmlspecs/wiki/JmlEclipse</a> – 19.05.2012 г. – Загол. з екрану.</li>
                </List>
            </div>
        </MethodologySection>
    );
}

export default ReferencesList;