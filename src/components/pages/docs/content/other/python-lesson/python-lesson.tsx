import ContractProgrammingPython
    from "@/components/pages/docs/content/other/python-lesson/contract-programming-python/contract-programming-python";
import SectionDivider from "@/components/common/section-divider/section-divider";
import TheMainIdeaContractProgramming
    from "@/components/pages/docs/content/other/python-lesson/the-main-idea-contract-programming/the-main-idea-contract-programming";
import PyContractsPackage
    from "@/components/pages/docs/content/other/python-lesson/pyContracts-package/pyContracts-package";
import ExampleOfPyContractsOnUbuntu
    from "@/components/pages/docs/content/other/python-lesson/example-of-pyContracts-on-ubuntu/example-of-pyContracts-on-ubuntu";
import InstallingPyContractsOnWindows
    from "@/components/pages/docs/content/other/python-lesson/installing-pyContracts-on-windows/installing-pyContracts-on-windows";
import InstallationSteps
    from "@/components/pages/docs/content/other/python-lesson/installation-steps/installation-steps";
import TermsOfUse from "@/components/pages/docs/content/other/python-lesson/terms-of-use/terms-of-use";
import Mistakes from "@/components/pages/docs/content/other/python-lesson/mistakes/mistakes";
import TaskStatement from "@/components/pages/docs/content/other/python-lesson/task-statement/task-statement";
import VariantsOfIndividualTasks
    from "@/components/pages/docs/content/other/python-lesson/variants-of-individual-tasks/variants-of-individual-tasks";
import ControlQuestions from "@/components/pages/docs/content/other/python-lesson/control-questions/control-questions";

function PythonLesson() {
    return (
        <div>
            <ContractProgrammingPython />
            <SectionDivider />
            <TheMainIdeaContractProgramming />
            <SectionDivider />
            <PyContractsPackage />
            <SectionDivider />
            <ExampleOfPyContractsOnUbuntu />
            <SectionDivider />
            <InstallingPyContractsOnWindows />
            <SectionDivider />
            <InstallationSteps />
            <SectionDivider />
            <TermsOfUse />
            <SectionDivider />
            <Mistakes />
            <SectionDivider />
            <TaskStatement />
            <SectionDivider />
            <VariantsOfIndividualTasks />
            <SectionDivider />
            <ControlQuestions />
        </div>
    );
}

export default PythonLesson;