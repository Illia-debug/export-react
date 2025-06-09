import {type FC, useEffect, useState} from "react";
import type {ICommentsHolder} from "../../../models/commentsHolder/ICommentsHolder.ts";
import {service} from "../../../services/Api.services.ts";
import {CommentHolder} from "../CommentHolder/CommentHolder.tsx";

export const CommentsHolder:FC = () => {
    const [comments, setComments] = useState<ICommentsHolder[]>([]);
    useEffect(() => {
        service.getCommentsHolder().then((allComments)=>{
            setComments(allComments)
        })
    }, []);
    return (
        <>
            {
                comments.map((comment)=><CommentHolder item={comment} key={comment.id}/>)
            }
        </>
    );
};