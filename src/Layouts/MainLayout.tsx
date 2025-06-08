import {Menu} from "../Components/Menu/MainMenu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <div>
                <Menu/>
                <hr/>
                <Outlet/>
            </div>
        </>
    );
};