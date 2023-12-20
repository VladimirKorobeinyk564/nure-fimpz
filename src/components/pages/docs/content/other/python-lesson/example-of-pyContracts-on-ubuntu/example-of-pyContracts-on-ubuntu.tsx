import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import List from "@/components/common/list/List";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image1 from "@/assets/images/lb4/image1.png"
import image2 from "@/assets/images/lb4/image2.png"
import image3 from "@/assets/images/lb4/image3.png"
import image4 from "@/assets/images/lb4/image4.png"
import image5 from "@/assets/images/lb4/image5.png"
import image6 from "@/assets/images/lb4/image6.png"
import TerminalSnippet from "@/components/common/terminal-snippet/terminal-snippet";
import {useTranslation} from "react-i18next";

const ExampleOfPyContractsOnUbuntu = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.pyContractsOnUbuntu')}
                            id={"exampleOfPyContractsOnUbuntu"} isFirstSection={false}>
            <List type={"Number"}>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.l1')}
                    <TerminalSnippet>pip3 --version</TerminalSnippet>
                    <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.img1')} image={image1} />
                    <TerminalSnippet>sudo apt update</TerminalSnippet>
                    <ImageWrapper image={image2} />
                    <TerminalSnippet>sudo apt install python3-pip</TerminalSnippet>
                    <ImageWrapper image={image3} />
                </li>
                <li>
                    {t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.l2')}
                    <TerminalSnippet>pip install virtualenv</TerminalSnippet>
                    <TerminalSnippet>{`python<version> -m venv <virtual-environment-name>`}</TerminalSnippet> {t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.l3')}
                    <TerminalSnippet>python3.9 -m venv env</TerminalSnippet>
                    <TerminalSnippet>source env/bin/activate</TerminalSnippet>
                    <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.img2')} image={image4} />
                </li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.l4')}
                    <TerminalSnippet>pip install PyContracts3==3.0.2</TerminalSnippet>
                    <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.img3')} image={image5} />
                </li>
                <li>{t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.l5')}
                    <TerminalSnippet>from contracts import contract</TerminalSnippet>
                    <ImageWrapper imgSubtitle={t('docsPage.content.other.pythonLesson.pyContractsOnUbuntu.img4')} image={image6} />
                </li>
            </List>
        </MethodologySection>
    );
};

export default ExampleOfPyContractsOnUbuntu;