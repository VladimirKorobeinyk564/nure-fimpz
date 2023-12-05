import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import AccentSpan from "@/components/common/accent-span/accent-span";

const ClassesOfPropertiesOfDistributedSystems = () => {
    return (
        <MethodologySection title={"Класи властивостей розподілених систем"} id={"classesOfPropertiesOfDistributedSystems"} isFirstSection={false}>
            <p>Традиційно властивості розподілених систем поділяються на наступні
                класи:</p>
            <List type={"Text"}>
                <li>властивості досяжності (reachability), встановлюють, що специфічний стан
                    системи може бути досягнутий, загальний вид LTL формули <AccentSpan>EF</AccentSpan>ϕ;</li>
                <li>властивості безпеки (safety), встановлюють, що дещо небажане ніколи не
                    станеться в системі, загальний вид LTL формули <AccentSpan>G</AccentSpan>¬ϕ;</li>
                <li>властивості живості (liveness), встановлюють, що за деяких умов дещо “добре” в
                    кінці кінців відбудеться при будь-якому сценарії поведінки системи, загальний
                    вид LTL формули <AccentSpan>GF</AccentSpan>ϕ;</li>
                <li>властивості справедливості (fairness), встановлюють, що дещо буде виконуватися
                    невизначено часто, загальний вид LTL формули</li>
            </List>
        </MethodologySection>
    );
};

export default ClassesOfPropertiesOfDistributedSystems;