import MethodicalForIndependentWorkOfStudents
    from "@/components/pages/docs/content/lb/lb-3/methodical-for-independent-work-of-students/methodical-for-independent-work-of-students";
import ProgramVerificationBasedOnTemporalLogic
    from "@/components/pages/docs/content/lb/lb-3/program-verification-based-on-temporal-logic/program-verification-based-on-temporal-logic";
import SpinPackage from "@/components/pages/docs/content/lb/lb-3/spin-package/spin-package";
import SectionDivider from "@/components/common/section-divider/section-divider";
import UsingSpinOnWindows from "@/components/pages/docs/content/lb/lb-3/using-spin-on-windows/using-spin-on-windows";
import СheckingTheModelBasedOnLtl
    from "@/components/pages/docs/content/lb/lb-3/сhecking-the-model-based-on-LTL/сhecking-the-model-based-on-LTL";
import VariantsOfIndividualTasks
    from "@/components/pages/docs/content/lb/lb-3/variants-of-individual-tasks/variants-of-individual-tasks";
import ControlQuestions from "@/components/pages/docs/content/lb/lb-3/control-questions/control-questions";
import ListOfLinks from "@/components/pages/docs/content/lb/lb-3/list-of-links/list-of-links";
import ClassesOfPropertiesOfDistributedSystems
    from "@/components/pages/docs/content/lb/lb-3/classes-of-properties-of-distributed-systems/classes-of-properties-of-distributed-systems";
import OperatoriSpinAtLtl from "@/components/pages/docs/content/lb/lb-3/operatori-spin-at-LTL/operatori-spin-at-LTL";

function ThirdLaboratoryWork() {
    return (
        <div>
            <ProgramVerificationBasedOnTemporalLogic />
            <SectionDivider />
            <MethodicalForIndependentWorkOfStudents />
            <SectionDivider />
            <SpinPackage />
            <SectionDivider />
            <UsingSpinOnWindows />
            <SectionDivider />
            <СheckingTheModelBasedOnLtl />
            <SectionDivider />
            <ClassesOfPropertiesOfDistributedSystems />
            <SectionDivider />
            <OperatoriSpinAtLtl />
            <SectionDivider />
            <VariantsOfIndividualTasks />
            <SectionDivider />
            <ControlQuestions />
            <SectionDivider />
            <ListOfLinks />
        </div>
    );
}

export default ThirdLaboratoryWork;