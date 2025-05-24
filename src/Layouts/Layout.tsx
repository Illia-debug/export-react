import {Outlet} from "react-router-dom";
import {MenuLayout} from "../components/Menu/MenuLayout.tsx";

export const Layout = () => {
    return (
        <>
            <div>
                <MenuLayout/>
                <hr/>
                <Outlet/>
            </div>
        </>
    );
};