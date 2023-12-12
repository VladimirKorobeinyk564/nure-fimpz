import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";

function FirstPracticalWork() {
    return (
        <div className={'w-full'}>
            <p>First practical work</p>
            <SectionDivider></SectionDivider>
            <p>First practical work</p>
            <MethodologySection title={'fef'} id={'efef'} isFirstSection={false}>
                fsefse
            </MethodologySection>
        </div>
    );
}

export default FirstPracticalWork;