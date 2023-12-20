import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet";
import {useTranslation} from "react-i18next";

const InstallingPyContractsOnWindows = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.pyContractsOnWindows')}
                            id={"installingPyContractsOnWindows"} isFirstSection={false}>
            <List type={"Number"}>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l1')}
                    <a href={"https://www.python.org/downloads/windows/"} className={"text-primary-color"}>https://www.python.org/downloads/windows/</a>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l2')}
                </li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l3')}</li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l4')}</li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l5')}</li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l6')}</li>
                <li>
                    {t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l7')}
                    <List type={"Text"}>
                        <li><TerminalSnippet>pip install virtualenv</TerminalSnippet></li>
                        <li><TerminalSnippet>virtualenv env</TerminalSnippet></li>
                        <li><TerminalSnippet>env\Scripts\activate</TerminalSnippet></li>
                    </List>
                </li>
                <li>
                    {t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l8')}
                    <TerminalSnippet>pip install PyContracts3==3.0.2</TerminalSnippet>
                </li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnWindows.l9')}</li>
            </List>
        </MethodologySection>
    );
};

export default InstallingPyContractsOnWindows;