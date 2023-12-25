import {Button} from "@/components/ui/button/button.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import SupportUkraine from "@/components/common/support-ukraine/support-ukraine.tsx";
import { motion } from "framer-motion"
import {useEffect, useState} from "react";

function Home() {
    const navigate = useNavigate();
    const {t, i18n } = useTranslation();
    const [animationKey, setAnimationKey] = useState('animation');

    const gradientAnimation = {
        hidden: {
            backgroundPositionX: i18n.language === "ua" ? "-390px" : "-232px",
        },
        visible: {
            backgroundPositionX: 0,
            transition: {delay: 0.2, duration: 2, repeat: Infinity, ease: "linear"}
        }
    }

    const textYAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: 0.8, linear: [0.67, 0.67, 0.67, 0.67]}
        })
    }

    const mainBgAnimation = {
        hidden: {
            backgroundPositionY: 0,
        },
        visible: {
            backgroundPositionY: `${window.innerHeight}px`,
            transition: {delay: 0.2, duration: 3, repeat: Infinity, ease: "linear"}
        }
    }

    useEffect(() => {
        setAnimationKey((prevKey) => `${prevKey}-updated`);
    }, [i18n.language]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={mainBgAnimation}
            className="h-[100vh] bg-home-bg-light dark:bg-home-bg-dark bg-cover bg-center relative">
            <motion.div
                className={
                    `promo-block w-full px-[60px] text-center text-light-text-color ` +
                    ` dark:text-dark-text-color absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`
                }>
                <motion.h1
                    custom={1}
                    variants={textYAnimation}
                    className={'text-[55px] font-extrabold leading-[60px] mb-[20px]'}><motion.span
                    key={animationKey}
                    variants={gradientAnimation}
                    className={'bg-home-tagline-gradient bg-clip-text text-transparent'}>
                    {t('homePage.tagline.span')}</motion.span> {t('homePage.tagline.methods')}<br/> {t('homePage.tagline.other')}
                </motion.h1>
                <motion.p
                    custom={2}
                    variants={textYAnimation}
                    className={'mb-[50px] text-dark-subtext-color text-[18px]'}>{t('homePage.subtitle.first')}
                    <br/> {t('homePage.subtitle.second')}</motion.p>
                <motion.div
                    custom={3}
                    variants={textYAnimation}>
                    <Button
                        className={'px-[40px] py-[28px] text-[16px] font-bold'}
                        onClick={() => navigate('/docs')}
                    >
                        {t('homePage.startBtn')}
                    </Button>
                </motion.div>
            </motion.div>
            <SupportUkraine></SupportUkraine>
        </motion.div>
    );
}

export default Home;