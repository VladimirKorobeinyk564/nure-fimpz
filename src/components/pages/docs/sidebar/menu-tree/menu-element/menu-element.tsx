import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

interface MenuItemProps {
    item: MenuItem;
    level: number;
    expandedItems: string[];
    toggleItem: (item: MenuItem) => void;
    renderMenu: (items: MenuItem[], level?: number) => JSX.Element[] | null;
}

function MenuElement(props: Readonly<MenuItemProps>) {
    const {
        item, level,
        expandedItems, toggleItem,
        renderMenu
    } = props;

    return (
        <div key={item.key} style={{paddingLeft: `${10 * level}px`, fontWeight: `${level === 0 && 'bold'}`}}
             className=" transition-all duration-300 menu-item py-[16px] cursor-pointer select-none">
            <div className="flex items-center justify-between" onClick={() => toggleItem(item)}>
                <p>{item.label}</p>
                {item.nodes.length > 0 && (
                    <div className={`transition-transform duration-300 ${expandedItems.includes(item.key) ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`}>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.00579834" y="1.93604" width="2.34743" height="10.7982" rx="1.17372"
                                  transform="rotate(-45 0.00579834 1.93604)" fill="#EBECF0"/>
                            <rect x="13.9322" y="-0.0057373" width="2.34743" height="11.226" rx="1.17372"
                                  transform="rotate(45 13.9322 -0.0057373)" fill="#EBECF0"/>
                        </svg>
                    </div>
                )}
            </div>
            {expandedItems.includes(item.key) && item.nodes.length > 0 && renderMenu(item.nodes, level + 1)}
        </div>
    );
}

export default MenuElement;