import type {ICommentsHolder} from "../../../models/commentsHolder/ICommentsHolder.ts";
import type {FC} from "react";

type CommentHolderPropsType={
    item:ICommentsHolder
}
export const CommentHolder:FC<CommentHolderPropsType> = ({item}:CommentHolderPropsType) => {
    return (
        <>
            <div>Post Id: {item.postId}</div>
            <div>Id: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <div>Body: {item.body}</div>
            <hr/>
        </>
    );
};