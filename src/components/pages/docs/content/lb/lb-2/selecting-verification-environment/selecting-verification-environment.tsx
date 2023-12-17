import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";
import {useTranslation} from "react-i18next";

function SelectingVerificationEnvironment() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.preparingWorkKeY.label')}
            id={'preparingWorkWithKeY'}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.preparingWorkKeY.p1')}
            </p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.preparingWorkKeY.p2')}
            </p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.preparingWorkKeY.p3')}
            </p>
            <TerminalSnippet title={t('docsPage.content.lb.lb2.preparingWorkKeY.p4')}>
                {`Key %KEYROOT%/bin/startProver.bat.`}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.preparingWorkKeY.p5')}
            </p>
        </MethodologySection>
    );
}

export default SelectingVerificationEnvironment;