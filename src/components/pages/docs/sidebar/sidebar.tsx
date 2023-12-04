import MenuTree from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

function Sidebar() {

    return (
        <div className={'w-[330px] flex flex-col pr-[15px] pt-[20px]'}>
            <h3 className={'text-[#62656F] pl-[30px] mb-[10px]'}>ВИВЧЕННЯ ФІМПЗ</h3>
            <div className="tree flex-grow height-[300px] overflow-y-scroll pr-[15px]">
                <MenuTree maxDepth={2}></MenuTree>
            </div>
            <div className="support-ukraine text-dark-subtext-color text-center py-[15px] pr-[15px] bottom-0 w-full">
                <p>#supportUkraine 🇺🇦</p>
            </div>
        </div>
    );
}

export default Sidebar;
