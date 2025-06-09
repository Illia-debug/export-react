import {type FC, useEffect, useState} from "react";
import type {IPostHolder} from "../../../models/PostsHolder/IPostsHolder.ts";
import {service} from "../../../services/Api.services.ts";
import {PostHolder} from "../PostHolder/PostHolder.tsx";

export const PostsHolder:FC = () => {
    const [posts, setPosts] = useState<IPostHolder[]>([]);
    useEffect(() => {
        service.getPostsHolder().then((allPosts)=>{
            setPosts(allPosts)
        })
    }, []);
    return (
        <>
            {
                posts.map(post=><PostHolder item={post} key={post.id}/>)
            }
        </>
    );
};