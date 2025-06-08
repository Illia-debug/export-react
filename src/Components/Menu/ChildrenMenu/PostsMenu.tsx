import {Link, Outlet} from "react-router-dom";

export const PostsMenu = () => {
    return (
        <>
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}> posts jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}> posts dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
        </>
    );
};