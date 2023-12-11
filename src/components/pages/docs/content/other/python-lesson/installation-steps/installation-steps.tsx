import MethodologySection from "@/components/common/methodology-section/MethodologySection";

const InstallationSteps = () => {
    return (
        <MethodologySection title={"Кроки встановлення"}
                            id={"installationSteps"} isFirstSection={false}>
            <p>
                Перші 5 кроків встановлення можна подивитись на відео: <a href={"https://www.youtube.com/watch?v=i-MuSAwgwCU"} className={"text-primary-color"}>https://www.youtube.com/watch?v=i-MuSAwgwCU</a> (англійська, 4хв).
            </p>
            <p>
                Крок 6 можна подивитись на відео <a href={"https://www.youtube.com/watch?v=ebeebaumL3M"} className={"text-primary-color"}>https://www.youtube.com/watch?v=ebeebaumL3M</a> (англійська, 6хв).
            </p>
            <p>Кроки 7-8 для Windows та Linux ідентичні.</p>
        </MethodologySection>
    );
};

export default InstallationSteps;