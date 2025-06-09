import {type FC, useEffect, useState} from "react";
import type {IPostDummy} from "../../../models/postDummy/IPostDummy.ts";
import {service} from "../../../services/Api.services.ts";
import {PostDummy} from "../PostDummy/PostDummy.tsx";

export const PostsDummy:FC = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);
    useEffect(() => {
        service.getPostsDummy().then((allPosts)=>{
            setPosts(allPosts)
        })
    }, []);
    return (
        <>
            {
                posts.map(post=><PostDummy item={post} key={post.id}/>)
            }
        </>
    );
};