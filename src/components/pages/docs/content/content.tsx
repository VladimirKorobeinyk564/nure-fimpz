import {Outlet} from "react-router";
import {useEffect} from "react";
import {useAppSelector} from "@/hooks/redux";

function Content() {
    const {selectedMenuTabId} = useAppSelector((state) => state.menuTree);

    useEffect(() => {
        const hash = window.location.hash;
        console.log(window.location)
        console.log(hash)
        if (hash) {
            console.log(hash)
            const sectionId = hash.substring(1);
            const element = document.getElementById(sectionId);
            element?.scrollIntoView();
        }
    }, [selectedMenuTabId]);

    return (
        <Outlet></Outlet>
    );
}

export default Content;