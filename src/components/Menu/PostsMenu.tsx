import {Link, Outlet} from "react-router-dom";

export const PostsMenu = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={'jsonplaceholder'}>posts JsonPlaceholder</Link></li>
                    <li><Link to={'dummyjson'}>posts dummyJson</Link></li>
                </ul>
                <hr/>
                <Outlet/>
            </div>
        </>
    );
};