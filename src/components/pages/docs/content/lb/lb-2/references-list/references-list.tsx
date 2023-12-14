import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";

function ReferencesList() {
    return (
        <MethodologySection
            title={'Перелік посилань'}
            id={"referencesListLb2"}
            isFirstSection={false}
        >
            <div className="mb-[40px]">
                <List type={'Number'}>
                    <li>KeY Quicktour for JML [Електронний ресурс] / Chalmers University of Technology. – Режим доступу:www/URL: <a className={'text-primary-color hover:underline'} href="http://www.key-project.org/down-load/quicktour/quicktour-1.6.zip">http://www.key-project.org/down-load/quicktour/quicktour-1.6.zip</a> – 19.05.2012 г. – Загол. з екрану.</li>
                </List>
            </div>
        </MethodologySection>
    );
}

export default ReferencesList;