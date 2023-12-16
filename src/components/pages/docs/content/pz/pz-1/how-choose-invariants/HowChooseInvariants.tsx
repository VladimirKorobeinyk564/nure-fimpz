import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";

function HowChooseInvariants() {
    return (
        <MethodologySection
            title={"Як вибирати інваріанти?"}
            id={"howChooseInvariants"}
            isFirstSection={false}
        >
            <p className={"mb-[10px]"}>Для будь-якого циклу можна написати скільки завгодно
                багато інваріантів. Будь-яка тотожна умова (2 * 2 = 4) є
                інваріантом будь-якого циклу. Тому серед інваріантів
                виділяються так звані відповідні інваріанти циклу.</p>
            <p className={"mb-[10px] font-bold"}>Інваріанта називається підходящою, якщо дозволяє
                довести, що після завершення циклу його постумову
                виконано (часткова коректність циклу).</p>
            <TerminalSnippet children={"Inv(x, z) & ! B ==> Post(x, z)x"}/>
        </MethodologySection>
    )
}

export default HowChooseInvariants;