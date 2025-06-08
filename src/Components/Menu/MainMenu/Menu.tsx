import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <>
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>users menu</Link></li>
                <li><Link to={'posts'}>posts menu</Link></li>
                <li><Link to={'comments'}>comments menu</Link></li>
            </ul>
        </div>
        </>
    );
};