import MenuTree from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";
import {useTranslation} from "react-i18next";
import SupportUkraine from "@/components/common/support-ukraine/support-ukraine.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/scroll-area";
import { motion } from "framer-motion"

function Sidebar() {
    const {t} = useTranslation();

    const textXAnimation = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {delay: 0.2, duration: 0.7, ease: "linear"}
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0.2, once: true }}
            className={'w-[330px] flex flex-col pr-[15px] pt-[20px]'}>
            <motion.h3
                variants={textXAnimation}
                className={'text-[#62656F] pl-[30px] mb-[10px]'}>{t('docsPage.fimpzLearn')}</motion.h3>
            <ScrollArea className={"tree flex-grow height-[300px] pr-[15px]"}>
                <ScrollBar />
                <MenuTree maxDepth={2} />
            </ScrollArea>
            <div className="relative w-full h-[80px]">
                <SupportUkraine />
            </div>
        </motion.div>
    );
}

export default Sidebar;
