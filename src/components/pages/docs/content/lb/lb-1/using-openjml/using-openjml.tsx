import MethodologySection from "@/components/common/methodology-section/MethodologySection.tsx";
import List from "@/components/common/list/List.tsx";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet.tsx";
import {useTranslation} from "react-i18next";

function UsingOpenjml() {
    const {t} = useTranslation();

    return (
        <MethodologySection
            title={t('docsPage.content.lb.lb1.usageOpenJML.label')}
            id={"usingOpenjml"}
            isFirstSection={false}
        >
            <p>{t('docsPage.content.lb.lb1.usageOpenJML.p1')}</p>

            <div className="mb-[20px]">
                <List type={'Number'}>
                    <li>{t('docsPage.content.lb.lb1.usageOpenJML.list.l1')}<code>d:\users\openjml</code>.
                    </li>
                    <li>{t('docsPage.content.lb.lb1.usageOpenJML.list.l2')}<code>d:\users\openjml\yices</code>.
                    </li>
                    <li>{t('docsPage.content.lb.lb1.usageOpenJML.list.l3-1')}<code>d:\users\openjml</code>{t('docsPage.content.lb.lb1.usageOpenJML.list.l3-2')}</li>
                    <li>{t('docsPage.content.lb.lb1.usageOpenJML.list.l4-1')}<code>openjml.properties</code>{t('docsPage.content.lb.lb1.usageOpenJML.list.l4-2')}<code>d:\users\openjml</code>{t('docsPage.content.lb.lb1.usageOpenJML.list.l4-3')}</li>
                </List>
            </div>

            <TerminalSnippet>
                {`openjml.localSetup=
openjml.defaultProver=yices
openjml.prover.yices= d:/users/openjml/yices/bin/yices.exe`
                }
            </TerminalSnippet>

            <p>{t('docsPage.content.lb.lb1.usageOpenJML.p2')}</p>
            <p>{t('docsPage.content.lb.lb1.usageOpenJML.p3')}</p>

            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.usageOpenJML.p4')}</p>
            <TerminalSnippet title={'Для jdk 1.7'}>
                {'java -jar openjml.jar -source 1.7 -noInternalSpecs <File.java>'}
            </TerminalSnippet>
            <TerminalSnippet title={'Для jdk 1.6'}>
                {'java -Xbootclasspath/p:d:\\users\\openjml/openjmlboot.jar -jar openjml.jar -source 1.7 -noInternalSpecs -showNotImplemented <File.java>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.usageOpenJML.p5')}</p>
            <TerminalSnippet>
                {'java -jar openjml.jar -cp jmlspecs.jar -rac –source 1.7 –target 1.7 -showNotImplemented <File.java>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.usageOpenJML.p6')}</p>
            <TerminalSnippet>
                {'java -classpath .;jmlruntime.jar; <File>'}
            </TerminalSnippet>
            <p className={'mb-[10px]'}>{t('docsPage.content.lb.lb1.usageOpenJML.p7')}</p>
            <TerminalSnippet>
                {'java -jar openjml.jar -cp jmlspecs.jar -esc -source 1.7 <File.java>'}
            </TerminalSnippet>
        </MethodologySection>
    );
}

export default UsingOpenjml;