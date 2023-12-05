import SectionDivider from "@/components/common/section-divider/section-divider.tsx";
import ContractProgramming from "@/components/pages/docs/content/lb/lb-1/contract-programming/contract-programming.tsx";
import TheoreticalInformation from "@/components/pages/docs/content/lb/lb-1/theoretical-information/theoretical-information.tsx";
import UsingOpenjml from "@/components/pages/docs/content/lb/lb-1/using-openjml/using-openjml.tsx";
import TestingCustomizedUtility from "@/components/pages/docs/content/lb/lb-1/testing-customized-utility/testing-customized-utility.tsx";
import ProblemStatement from "@/components/pages/docs/content/lb/lb-1/problem-statement/problem-statement.tsx";
import VariantsIndividualTasks from "@/components/pages/docs/content/lb/lb-1/variants-individual-tasks/variants-individual-tasks.tsx";
import QuestionsAndTasks from "@/components/pages/docs/content/lb/lb-1/questions-and-tasks/questions-and-tasks.tsx";
import ReferencesList from "@/components/pages/docs/content/lb/lb-1/references-list/references-list.tsx";

function FirstLaboratoryWork() {
    return (
        <div>
            <ContractProgramming></ContractProgramming>
            <TheoreticalInformation></TheoreticalInformation>
            <SectionDivider></SectionDivider>
            <UsingOpenjml></UsingOpenjml>
            <SectionDivider></SectionDivider>
            <TestingCustomizedUtility></TestingCustomizedUtility>
            <SectionDivider></SectionDivider>
            <ProblemStatement></ProblemStatement>
            <SectionDivider></SectionDivider>
            <VariantsIndividualTasks></VariantsIndividualTasks>
            <SectionDivider></SectionDivider>
            <QuestionsAndTasks></QuestionsAndTasks>
            <SectionDivider></SectionDivider>
            <ReferencesList></ReferencesList>
        </div>
    );
}

export default FirstLaboratoryWork;