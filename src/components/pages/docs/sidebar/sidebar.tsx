import MenuTree from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";
import {useTranslation} from "react-i18next";
import SupportUkraine from "@/components/common/support-ukraine/support-ukraine.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/scroll-area";

function Sidebar() {
    const {t} = useTranslation();

    return (
        <div className={'w-[330px] flex flex-col pr-[15px] pt-[20px]'}>
            <h3 className={'text-[#62656F] pl-[30px] mb-[10px]'}>{t('docsPage.fimpzLearn')}</h3>
            <ScrollArea className={"tree flex-grow height-[300px] pr-[15px]"}>
                <ScrollBar />
                <MenuTree maxDepth={2} />
            </ScrollArea>
            <div className="relative w-full h-[80px]">
                <SupportUkraine />
            </div>
        </div>
    );
}

export default Sidebar;
