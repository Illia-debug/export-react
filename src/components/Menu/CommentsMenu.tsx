import {Link, Outlet} from "react-router-dom";

export const CommentsMenu = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={'jsonplaceholder'}>comments JsonPlaceholder</Link></li>
                    <hr/>
                    <Outlet/>
                </ul>
            </div>
        </>
    );
};