import {Outlet} from "react-router";
import {useEffect} from "react";

function Content() {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.substring(1);
            const element = document.getElementById(sectionId);
            element?.scrollIntoView();
        }
    }, []);

    return (
        <Outlet></Outlet>
    );
}

export default Content;