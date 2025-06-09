import type {ICommentsDummy} from "../../../models/CommentsDummy/ICommentsDummy.ts";
import type {FC} from "react";

type CommentDummyPropsType = {
    item: ICommentsDummy
};
export const CommentDummy:FC<CommentDummyPropsType> = ({item}:CommentDummyPropsType) => {
    return (
        <>
        <div>Id: {item.id}</div>
        <div>Body: {item.body}</div>
        <div>Post Id: {item.postId}</div>
        <div>Likes: {item.likes}</div>
            <ul>User:
                <li>id: {item.user.id}</li>
                <li>username: {item.user.username}</li>
                <li>fullName: {item.user.fullName}</li>
            </ul>
            <hr/>
        </>
    );
};