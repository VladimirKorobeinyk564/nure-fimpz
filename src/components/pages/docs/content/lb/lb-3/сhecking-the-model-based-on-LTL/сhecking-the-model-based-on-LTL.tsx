import React from 'react';
import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import AccentSpan from "@/components/common/accent-span/accent-span";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image4 from "@/assets/images/lb3/image4.png";
import image5 from "@/assets/images/lb3/image5.png";
import {python} from "@codemirror/lang-python";
import {useTranslation} from "react-i18next";

const СheckingTheModelBasedOnLtl = () => {
    const {t} = useTranslation();

    const code = `#define getone (accepted == 1)
#define getzero (accepted == 0)
[] (getzero -> (getzero U getone))`;

    const code1 = `unreached in proctype Sender
line 14, "pan.__", state 10, "-end-"
(1 of 10 states)
unreached in proctype Receiver
line 23, "pan.__", state 6, "-end-"
(1 of 6 states)
unreached in proctype :never:
line 50, "pain.__", state 14, "-end-"
(1 of 14 states)`;
    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.correctnessModel')} id={"сheckingTheModelBasedOnLTL"} isFirstSection={false}>
            <p>{t('docsPage.content.lb.lb3.correctnessModel.p1')}</p>
            <p>{t('docsPage.content.lb.lb3.correctnessModel.p2')}</p>
            <CodeSnippet lang={[python()]} title={"Run/LTL Property Manager (рис. 4)."}>
                {code}
            </CodeSnippet>
            <ImageWrapper imgSubtitle={t('docsPage.content.lb.lb3.correctnessModel.img1')} image={image4} />
            <ImageWrapper imgSubtitle={t('docsPage.content.lb.lb3.correctnessModel.img1')} image={image5} />
            <p>{t('docsPage.content.lb.lb3.correctnessModel.p3')}<AccentSpan>valid</AccentSpan></p>
            <CodeSnippet lang={[python()]}>
                {code1}
            </CodeSnippet>
            <p>{t('docsPage.content.lb.lb3.correctnessModel.p4')}</p>
            <p>{t('docsPage.content.lb.lb3.correctnessModel.p5')}</p>
        </MethodologySection>
    );
};

export default СheckingTheModelBasedOnLtl;