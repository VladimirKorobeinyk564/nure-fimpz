import DeductiveProgramVerification
    from "@/components/pages/docs/content/lb/lb-2/deductive-program-verification/deductive-program-verification.tsx";
import InstructionsWorkStudents
    from "@/components/pages/docs/content/lb/lb-2/instructions-work-students/instructions-work-students.tsx";
import SelectingVerificationEnvironment
    from "@/components/pages/docs/content/lb/lb-2/selecting-verification-environment/selecting-verification-environment.tsx";
import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import VariantsIndividualTasks
    from "@/components/pages/docs/content/lb/lb-2/variants-individual-tasks/variants-individual-tasks.tsx";
import QuestionsAndTasks from "@/components/pages/docs/content/lb/lb-2/questions-and-tasks/questions-and-tasks.tsx";
import ReferencesList from "@/components/pages/docs/content/lb/lb-2/references-list/references-list.tsx";

function SecondLaboratoryWork() {
    return (
        <div>
            <DeductiveProgramVerification></DeductiveProgramVerification>
            <SelectingVerificationEnvironment></SelectingVerificationEnvironment>
            <SectionDivider></SectionDivider>

            <InstructionsWorkStudents></InstructionsWorkStudents>

            <SectionDivider></SectionDivider>
            <VariantsIndividualTasks></VariantsIndividualTasks>
            <SectionDivider></SectionDivider>
            <QuestionsAndTasks></QuestionsAndTasks>
            <SectionDivider></SectionDivider>
            <ReferencesList></ReferencesList>
        </div>
    );
}

export default SecondLaboratoryWork;