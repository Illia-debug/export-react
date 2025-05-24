import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../Layouts/Layout.tsx";
import {HomePage} from "../Pages/HomePage.tsx";
import {UsersPlaceholderPage} from "../Pages/usersPages/UsersPlaceholderPage.tsx";
import {UsersDummyjsonPage} from "../Pages/usersPages/UsersDummyjsonPage.tsx";
import {UsersMenu} from "../components/Menu/UsersMenu.tsx";
import {PostsMenu} from "../components/Menu/PostsMenu.tsx";
import {PostsPlaseholderPage} from "../Pages/postsPages/PostsPlaseholderPage.tsx";
import {PostsDummyPage} from "../Pages/postsPages/PostsDummyPage.tsx";
import {CommentsMenu} from "../components/Menu/CommentsMenu.tsx";
import {CommentsPlaseholderPage} from "../Pages/CommentsPlaseholderPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersMenu/>, children: [
                    {path: 'jsonplaceholder', element: <UsersPlaceholderPage/>},
                    {path: 'dummyjson', element: <UsersDummyjsonPage/>}
                ]
            },
            {path:'posts',element:<PostsMenu/>, children:[
                    {path: 'jsonplaceholder',element: <PostsPlaseholderPage/>},
                    {path: 'dummyjson',element:<PostsDummyPage/> }
                ]},
            {path:'comments',element:<CommentsMenu/>,children:[
                    {path: 'jsonplaceholder',element: <CommentsPlaseholderPage/>}
                ]}

        ]
    }
])