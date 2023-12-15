import {Button} from "@/components/ui/button/button.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import SupportUkraine from "@/components/common/support-ukraine/support-ukraine.tsx";

function Home() {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="h-[100vh] bg-home-bg-light dark:bg-home-bg-dark bg-cover bg-center relative">
            <div
                className={
                    `promo-block w-full px-[60px] text-center text-light-text-color ` +
                    ` dark:text-dark-text-color absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`
                }>
                <h1
                    className={'text-[55px] font-extrabold leading-[60px] mb-[20px]'}><span
                    className={'bg-home-tagline-gradient bg-clip-text text-transparent'}>
                    {t('homePage.tagline.span')}</span> {t('homePage.tagline.methods')}<br/> {t('homePage.tagline.other')}
                </h1>
                <p className={'mb-[50px] text-dark-subtext-color text-[18px]'}>{t('homePage.subtitle.first')}
                    <br/> {t('homePage.subtitle.second')}</p>
                <Button
                    className={'px-[40px] py-[28px] text-[16px] font-bold'}
                    onClick={() => navigate('/docs')}
                >
                    {t('homePage.startBtn')}
                </Button>
            </div>
            <SupportUkraine></SupportUkraine>
        </div>
    );
}

export default Home;