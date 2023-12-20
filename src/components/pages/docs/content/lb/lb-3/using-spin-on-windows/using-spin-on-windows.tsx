import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image1 from "@/assets/images/lb3/image1.png"
import image2 from "@/assets/images/lb3/image2.png"
import image3 from "@/assets/images/lb3/image3.png"
import {python} from "@codemirror/lang-python";
import {useTranslation} from "react-i18next";

const UsingSpinOnWindows = () => {
    const {t} = useTranslation();

    const code = `mtype = { msg, ack };/* объявляем два возможных типа сообщения */
/* объявляем канал отправителя */
chan to_sndr = [2] of { mtype, bit };
/* объявляем канал получателя */
chan to_rcvr = [2] of { mtype, bit };

active proctype Sender(){ /* процесс отправителя */
    again: to_rcvr!msg,1; /* отправляем сообщение, помеченное битом 1 */
    to_sndr?ack,1; /* получаем подтверждение, помеченное битом 1 */
    to_rcvr!msg,0; /* отправляем сообщение, помеченное битом 0 */
    to_sndr?ack,0; /* получаем подтверждение, помеченное битом 0 */
    goto again
}
/* процесс получателя */
active proctype Receiver() {
    again: to_rcvr?msg,1; /* получаем сообщение, помеченное битом 1 */
    to_sndr!ack,1; /* отправляем подтверждение, помеченное битом 1 */
    to_rcvr?msg,0; /* получаем сообщение, помеченное битом 0 */
    to_sndr!ack,0; /* отправляем подтверждение, помеченное битом 0 */
    goto again
}`
    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.spinOnWindows')}
                            id={"usingSpinOnWindows"} isFirstSection={false}>
            <p>{t('docsPage.content.lb.lb3.spinOnWindows.p1')}</p>
            <List type={"Text"}>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l1')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l2')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l3')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l4')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l5')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l6')}</li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l7')}
                    <li className={"ml-[30px]"}>{t('docsPage.content.lb.lb3.spinOnWindows.l8')}</li>
                </li>
                <li>{t('docsPage.content.lb.lb3.spinOnWindows.l9')}</li>
            </List>
            <ImageWrapper imgSubtitle={"xspin під час роботи"} image={image1} />
            <p>{t('docsPage.content.lb.lb3.spinOnWindows.p2')}</p>
            <CodeSnippet lang={[python()]}>
                {code}
            </CodeSnippet>
            <p>{t('docsPage.content.lb.lb3.spinOnWindows.p3')}</p>
            <ImageWrapper imgSubtitle={"Вікно налаштування параметрів симуляції"} image={image2} />
            <p>{t('docsPage.content.lb.lb3.spinOnWindows.p4')}</p>
            <ImageWrapper imgSubtitle={"Профіль симуляції взаємодії процесів"} image={image3} />
        </MethodologySection>
    );
};

export default UsingSpinOnWindows;