import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import AccentSpan from "@/components/common/accent-span/accent-span";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import {python} from "@codemirror/lang-python";
import {useTranslation} from "react-i18next";

const VariantsOfIndividualTasks = () => {
    const {t} = useTranslation();

    const code = `proctype user(chan mgr) { /* user process in cluster */
    req: mgr!P; /* request access from local manager */
    mgr?G: /* gain access */
    progress:
    cs: count++;
    assert(count == 1);
    count--;
    mgr!V; /* release access */
    out:
    skip;
    goto req
}`
    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.optionsIndividualTasks')} id={"variantsOfIndividualTasks"} isFirstSection={false}>
            <List type={"Number"}>
                <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l1')}</li>
                <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l2')}</li>
                <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l3')}</li>
                <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l4')}
                    <div>
                        <p><AccentSpan>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l5')}</AccentSpan>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l6')}</p>
                        <CodeSnippet lang={[python()]} title={t('docsPage.content.lb.lb3.optionsIndividualTasks.c1')}>
                            {code}
                        </CodeSnippet>
                        <List type={"Text"}>
                            <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l7')}</li>
                            <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l8')}
                                <List type={"Text"}>
                                    <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l9')}</li>
                                    <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l10')}</li>
                                </List>
                            </li>
                        </List>
                    </div>
                </li>
                <li>{t('docsPage.content.lb.lb3.optionsIndividualTasks.l11')}</li>
            </List>
        </MethodologySection>
    );
};

export default VariantsOfIndividualTasks;