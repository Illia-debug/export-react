import {Link, Outlet} from "react-router-dom";

export const UsersMenu = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={'jsonplaceholder'}>users JsonPlaceholder</Link></li>
                    <li><Link to={'dummyjson'}>users dummyJson</Link></li>
                </ul>
                <hr/>
                <Outlet/>
            </div>
        </>
    );
};