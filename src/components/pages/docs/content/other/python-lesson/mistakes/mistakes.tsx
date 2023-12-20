import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image7 from "@/assets/images/lb4/image7.png"
import image8 from "@/assets/images/lb4/image8.png"
import image9 from "@/assets/images/lb4/image9.png"
import image10 from "@/assets/images/lb4/image10.png"
import image11 from "@/assets/images/lb4/image11.png"
import List from "@/components/common/list/List";
import {useTranslation} from "react-i18next";

const Mistakes = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.mistakes')}
                            id={"mistakes"} isFirstSection={false}>
            <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.mistakes.img1')} image={image7} />
            <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.mistakes.img2')} image={image8} />
            <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.mistakes.img3')} image={image9} />
            <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.mistakes.img4')} image={image10} />
            <List type={"Text"}>
                <li>{t('docsPage.content.other.pythonLesson.mistakes.l1')}</li>
                <li>{t('docsPage.content.other.pythonLesson.mistakes.l2')}</li>
            </List>
            <p>{t('docsPage.content.other.pythonLesson.mistakes.p1')}</p>
            <ImageWrapper image={image11} />
        </MethodologySection>
    );
};

export default Mistakes;