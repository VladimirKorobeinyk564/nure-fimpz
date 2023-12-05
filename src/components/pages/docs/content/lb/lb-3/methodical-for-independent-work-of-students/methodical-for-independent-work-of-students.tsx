import MethodologyObjective from "@/components/common/methodology-objective/MethodologyObjective";
import MethodologySection from "@/components/common/methodology-section/MethodologySection";

const MethodicalForIndependentWorkOfStudents = () => {
    return (
        <MethodologySection title={"Методичні вказівки з організації самостійної роботи студентів"}
                            id={"methodicalForIndependentWorkOfStudents"} isFirstSection={false}>
            <p>Для виконання роботи використовується SPIN [1, c.4-32,6 c. 1-126] –
                верифікатор моделей паралельних програм, написаних на С-подібній
                мові Promela (Protocol Meta Language). Розроблений в дослідницькому
                центрі Bell Labs Джерардом Холзманном. Міжнародна асоціація ACM
                нагородила Spin премією ACM Software System Award за 2001 р. В 1983
                році цією премією була нагороджена ОС UNIX, в 1997 р. – Tcl/Tk, в 2002
                г. – мова Java.</p>
        </MethodologySection>
    );
};

export default MethodicalForIndependentWorkOfStudents;