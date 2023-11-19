import Sidebar from "@/components/pages/docs/sidebar/sidebar.tsx";
import Content from "@/components/pages/docs/content/content.tsx";

function Docs() {
    return (
        <div className={'h-[100vh] pt-[80px] flex'}>
            <Sidebar></Sidebar>
            <Content></Content>
        </div>
    );
}

export default Docs;