import {Link, Outlet} from "react-router-dom";

export const CommentsMenu = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={'jsonplaceholder'}> comments jsonplaceholder</Link></li>
                    <li><Link to={'dummyjson'}> comments dummyjson</Link></li>
                </ul>
                <hr/>
                <Outlet/>
            </div>
        </>
    );
};