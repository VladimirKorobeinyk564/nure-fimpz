import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper.tsx";
import chooseStatementForProve from "@/assets/images/lb/lb-2/choose-statement-for-prove.jpg";
import windowBeforeStartRefinement from "@/assets/images/lb/lb-2/window-before-start-refinement.jpg";
import settingKeyAuto1 from "@/assets/images/lb/lb-2/setting-key-auto-1.jpg";
import settingKeyAuto2 from "@/assets/images/lb/lb-2/setting-key-auto-2.jpg";
import CodeSnippet from "@/components/common/code-snippet/code-snippet.tsx";
import {java} from "@codemirror/lang-java";
import {useTranslation} from "react-i18next";

function InstructionsWorkStudents() {
    const {t} = useTranslation();

    const code = `/* public normal_behaviour
*  ensures (\\forall int i; 0 <= i && i < logArray.length;
*       logArray[i].balance <= \\result.balance);
*  diverges true;
* */
public /*pure*/ LogRecord getMaximumRecord() {
    LogRecord max = logArray[0];
    
    /* loop_invariant
    *    0 <= i && i <= logArray.length
    *    && max != null &&
    *    (\\forall int j; 0 <= j && j < i;
    *    max.balance >= logArray[j].balance);
    *  assignable max, i;
    * */
    while (i < logArray.length) {
        LogRecord lr = logArray[i++];
        if (lr.getBalance() > max.getBalance()) {
            max = lr;
        }
    }

    return max;
}`;

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb2.provingStatementsHelpKeY.label')}
            id={"provingAssertionsKeY"}
            isFirstSection={false}
        >
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p1')}
            </p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p2')}
            </p>
            <div className="image-container flex justify-center">
                <div className={'w-[80%]'}>
                    <ImageWrapper
                        image={chooseStatementForProve}
                        imgSubtitle={t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p3')}
                    ></ImageWrapper>
                </div>
            </div>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p4')}
            </p>
            <div className="image-container flex justify-center">
                <div className={'w-[600px]'}>
                    <ImageWrapper
                        image={windowBeforeStartRefinement}
                        imgSubtitle={t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p5')}
                    ></ImageWrapper>
                </div>
            </div>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p6')}
            </p>

            <div className="image-container flex flex-col justify-center items-center">
                <div className={'w-[640px]'}>
                    <ImageWrapper
                        image={settingKeyAuto1}
                        imgSubtitle={t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p7')}
                    ></ImageWrapper>
                </div>
                <div className={'w-[600px]'}>
                    <ImageWrapper
                        image={settingKeyAuto2}
                        imgSubtitle={t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p8')}
                    ></ImageWrapper>
                </div>
            </div>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p9')}</p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p10')}
            </p>
            <CodeSnippet lang={[java()]}>
                {code}
            </CodeSnippet>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p11')}
            </p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p12')}
            </p>
            <p className={'mb-[10px]'}>
                {t('docsPage.content.lb.lb2.provingStatementsHelpKeY.p13')}
            </p>
        </MethodologySection>
    );
}

export default InstructionsWorkStudents;