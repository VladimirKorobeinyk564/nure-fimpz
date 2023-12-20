import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function PathQuantifiers() {
    return (
        <MethodologySection
            title={'Квантори шляху'}
            id={"pathQuantifiers"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Кожен стан може мати не одну, багато ланцюжків-продовжень, і є
                коренем свого дерева історій обчислень.</p>
            <p className={"mb-[10px]"}>Для однозначності інтерпретації формул темпоральної логіки на стрктурі
                Кріпке введені квантори шляху:</p>
        </MethodologySection>
    )
}

export default PathQuantifiers;