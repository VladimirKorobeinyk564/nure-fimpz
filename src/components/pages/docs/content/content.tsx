import {Outlet} from "react-router";

function Content() {
    return (
        <div className={'flex-grow px-[30px] pt-[10px]'}>
            <Outlet></Outlet>
        </div>
    );
}

export default Content;