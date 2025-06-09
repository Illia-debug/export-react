import type {IPostHolder} from "../../../models/PostsHolder/IPostsHolder.ts";
import type {FC} from "react";

type PostHolderPropsType = {
    item: IPostHolder
}

export const PostHolder: FC<PostHolderPropsType> = ({item}:PostHolderPropsType) => {
    return (
        <>
            <div>User Id: {item.userId}</div>
            <div>Title: {item.title}</div>
            <div>Id: {item.id}</div>
            <div>Body: {item.body}</div>
            <hr/>
        </>
    );
};