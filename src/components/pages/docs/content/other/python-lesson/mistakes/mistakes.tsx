import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import ImageWrapper from "@/components/common/image-wrapper/ImageWrapper";
import image7 from "@/assets/images/lb4/image7.png"
import image8 from "@/assets/images/lb4/image8.png"
import image9 from "@/assets/images/lb4/image9.png"
import image10 from "@/assets/images/lb4/image10.png"
import image11 from "@/assets/images/lb4/image11.png"
import List from "@/components/common/list/List";

const Mistakes = () => {
    return (
        <MethodologySection title={"Помилки, які є в прикладі вище:"}
                            id={"mistakes"} isFirstSection={false}>
            <ImageWrapper imgSubtitle={"в __init__ параметр weight може приймати float"} image={image7} />
            <ImageWrapper imgSubtitle={"add_country для person_1 не може приймати булеве значення"} image={image8} />
            <ImageWrapper imgSubtitle={"при створенні person_2 передаємо пусту строку замість імені"} image={image9} />
            <ImageWrapper imgSubtitle={"person_2.add_weight(0) викликатиме помилку, так як значення має бути більше нуля"} image={image10} />
            <List type={"Text"}>
                <li>в add_country має валідуватись не тільки строка, а й перевірка на її довжину. person_2.add_country([""]) має викликати помилку,</li>
                <li>@contract(returns='str_len_gt_zero') для def __str__ не має сенсу. Так як ми вже перевіряємо name на те, що він буде отримувати строку та буде не пустим. Логіка цієї функції не передбачає, що вона буде пустою. Доцільніше обмежети returns=”str”.</li>
            </List>
            <p>Коли всі помилки виправлено, має відпрацювати весь код без помилок:</p>
            <ImageWrapper image={image11} />
        </MethodologySection>
    );
};

export default Mistakes;