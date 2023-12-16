import DeductiveVerificationPrograms
    from "@/components/pages/docs/content/pz/pz-1/deductive-verification-programs/DeductiveVerificationPrograms.tsx";
import MethodicalInstructions
    from "@/components/pages/docs/content/pz/pz-1/methodical-instructions/MethodicalInstructions.tsx";
import PartialCorrectnessCycle
    from "@/components/pages/docs/content/pz/pz-1/partial-correctness-cycle/PartialCorrectnessCycle.tsx";
import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import CycleDiagramPremise from "@/components/pages/docs/content/pz/pz-1/cycle-diagram-premise/CycleDiagramPremise.tsx";
import DefinitionCycleInvariant
    from "@/components/pages/docs/content/pz/pz-1/definition-cycle-invariant/DefinitionCycleInvariant.tsx";
import HowChooseInvariants from "@/components/pages/docs/content/pz/pz-1/how-choose-invariants/HowChooseInvariants.tsx";
import StepsOfProof from "@/components/pages/docs/content/pz/pz-1/steps-of-proof/StepsOfProof.tsx";
import ProvingCorrectnessCycle
    from "@/components/pages/docs/content/pz/pz-1/proving-correctness-cycle/ProvingCorrectnessCycle.tsx";
import RuleCorrectProgramming
    from "@/components/pages/docs/content/pz/pz-1/rule-correct-programming/RuleCorrectProgramming.tsx";
import ExampleCorrectProgramming
    from "@/components/pages/docs/content/pz/pz-1/ example-correct-programming/ExampleCorrectProgramming.tsx";

function FirstPracticalWork() {
    return (
        <div>
            <DeductiveVerificationPrograms />
            <MethodicalInstructions />
            <SectionDivider />
            <PartialCorrectnessCycle />
            <SectionDivider />
            <CycleDiagramPremise />
            <SectionDivider />
            <DefinitionCycleInvariant />
            <SectionDivider />
            <HowChooseInvariants />
            <SectionDivider />
            <StepsOfProof />
            <SectionDivider />
            <ProvingCorrectnessCycle />
            <SectionDivider />
            <RuleCorrectProgramming />
            <SectionDivider />
            <ExampleCorrectProgramming />
            <SectionDivider />
        </div>
    );
}

export default FirstPracticalWork;