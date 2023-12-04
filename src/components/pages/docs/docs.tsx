import Sidebar from "@/components/pages/docs/sidebar/sidebar.tsx";
import Content from "@/components/pages/docs/content/content.tsx";
import Structure from "@/components/pages/docs/structure/structure.tsx";
import ScreenPlug from "@/components/pages/docs/screen-plug/screen-plug.tsx";

import {useAppSelector} from "@/hooks/redux.ts";

function Docs() {
    const selectedMenuTabId = useAppSelector((state) => state.menuTree.selectedMenuTabId);

    return (
        <div className={'h-[100vh] pt-[80px] flex'}>
            <Sidebar></Sidebar>
            {selectedMenuTabId === '' ? (
                <ScreenPlug></ScreenPlug>
            ) : (
                <>
                    <div className={'pt-[30px] px-[15px] flex-grow height-[300px] overflow-y-scroll'}>
                        <Content></Content>
                    </div>
                    <Structure></Structure>
                </>
            )}
        </div>
    );
}

export default Docs;