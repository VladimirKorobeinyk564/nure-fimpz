import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import ProgramVerificationTemporalLogic
    from "@/components/pages/docs/content/pz/pz-2/program-verification-temporal-logic/ProgramVerificationTemporalLogic.tsx";
import MethodicalInstructions
    from "@/components/pages/docs/content/pz/pz-2/methodical-instructions/MethodicalInstructions.tsx";
import OperatorsSection from "@/components/pages/docs/content/pz/pz-2/operators-section/OperatorsSection.tsx";
import ExamplesFormalizationStatements
    from "@/components/pages/docs/content/pz/pz-2/examples-formalization-statements/ExamplesFormalizationStatements.tsx";
import GrammarLtlLogic from "@/components/pages/docs/content/pz/pz-2/grammar-ltl-logic/GrammarLtlLogic.tsx";
import KripkeStructure from "@/components/pages/docs/content/pz/pz-2/kripke-structure/KripkeStructure.tsx";
import PathQuantifiers from "@/components/pages/docs/content/pz/pz-2/path-quantifiers/PathQuantifiers.tsx";
import LtlAndCtl from "@/components/pages/docs/content/pz/pz-2/ltl-and-ctl/LtlAndCtl.tsx";
import ExampleStatementCtlLogic
    from "@/components/pages/docs/content/pz/pz-2/example-statement-ctl-logic/ExampleStatementCtlLogic.tsx";
import DescriptionInteractivePrograms
    from "@/components/pages/docs/content/pz/pz-2/description-interactive-programs/DescriptionInteractivePrograms.tsx";
import PrincipleCtlVerification
    from "@/components/pages/docs/content/pz/pz-2/principle-ctl-verification/PrincipleCtlVerification.tsx";
import ExampleLtlVerification
    from "@/components/pages/docs/content/pz/pz-2/example-ltl-verification/ExampleLtlVerification.tsx";

function SecondPracticalWork() {
    return (
        <div>
            <ProgramVerificationTemporalLogic/>
            <MethodicalInstructions/>
            <SectionDivider/>
            <OperatorsSection/>
            <SectionDivider/>
            <ExamplesFormalizationStatements/>
            <SectionDivider/>
            <GrammarLtlLogic/>
            <SectionDivider/>
            <KripkeStructure/>
            <SectionDivider/>
            <PathQuantifiers/>
            <SectionDivider/>
            <LtlAndCtl/>
            <SectionDivider/>
            <ExampleStatementCtlLogic/>
            <SectionDivider/>
            <DescriptionInteractivePrograms/>
            <SectionDivider/>
            <PrincipleCtlVerification/>
            <SectionDivider/>
            <ExampleLtlVerification/>
            <SectionDivider/>
        </div>
    );
}

export default SecondPracticalWork;