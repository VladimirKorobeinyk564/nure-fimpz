import mainImg from "@/assets/images/main.svg"
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import { motion } from "framer-motion"

function ScreenPlug() {
    const textYAnimation = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {delay: custom * 0.2, duration: 0.5, ease: "linear"}
        })
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0.2, once: true }}
            className={'w-full pr-[30px] pl-[15px] pt-[20px] flex flex-col justify-center items-center overflow-hidden'}>
            <motion.h3
                custom={1}
                variants={textYAnimation}
                className={"text-[40px] font-bold mb-[30px]"}>Формальні методи інженерії програмного забезпечення</motion.h3>
            <motion.div
                custom={2}
                variants={textYAnimation}
            >
                <ImageWrapper image={mainImg} imgSubtitle={'Дисципліна направлена на засвоєння студентами основних формальних методів, що застосовуються\n' +
                    'задля моделювання, розробки та верифікації складних програмних продуктів, а саме створення формальної специфікації програмної системи, верифікації специфікацій шляхом доведення їх властивостей, реалізації системи на основі формальних перетворень специфікацій програм.'} />
            </motion.div>
        </motion.div>
    );
}

export default ScreenPlug;