import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {UsersMenu} from "../Components/Menu/ChildrenMenu/UsersMenu.tsx";
import {UsersPageDummy} from "../Pages/UsersPages/UsersPageDummy.tsx";
import {UsersPageHolder} from "../Pages/UsersPages/UsersPageHolder.tsx";
import {PostsMenu} from "../Components/Menu/ChildrenMenu/PostsMenu.tsx";
import {CommentsMenu} from "../Components/Menu/ChildrenMenu/CommentsMenu.tsx";
import {PostsPageHolder} from "../Pages/PostsPages/PostsPageHolder.tsx";
import {PostsPageDummy} from "../Pages/PostsPages/PostsPageDummy.tsx";
import {CommentsPageDummy} from "../Pages/CommentsPages/CommentsPageDummy.tsx";
import {CommentsPageHolder} from "../Pages/CommentsPages/CommentsPageHolder.tsx";

export const route = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {
                path: 'users', element: <UsersMenu/>,
                children: [
                    {path: 'jsonplaceholder', element: <UsersPageHolder/>},
                    {path: 'dummyjson', element: <UsersPageDummy/>}
                ]
            },
            {
                path: 'posts', element: <PostsMenu/>,
                children: [
                    {path: 'jsonplaceholder', element: <PostsPageHolder/>},
                    {path: 'dummyjson', element: <PostsPageDummy/>}
                ]
            },
            {
                path:'comments',element:<CommentsMenu/>,
                children:[
                    {path: 'jsonplaceholder', element: <CommentsPageHolder/>},
                    {path: 'dummyjson', element: <CommentsPageDummy/>}
                ]
            }
        ]
    }
])