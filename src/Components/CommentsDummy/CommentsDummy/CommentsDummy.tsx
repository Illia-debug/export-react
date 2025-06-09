import {type FC, useEffect, useState} from "react";
import type {ICommentsDummy} from "../../../models/CommentsDummy/ICommentsDummy.ts";
import {service} from "../../../services/Api.services.ts";
import {CommentDummy} from "../CommentDummy/CommentDummy.tsx";

export const CommentsDummy:FC = () => {
    const [comments, setComments] = useState<ICommentsDummy[]>([]);
    useEffect(() => {
        service.getCommentsDummy().then((allComments)=>{
            setComments(allComments)
        })
    }, []);
    return (
        <>
            {
                comments.map((comment)=><CommentDummy item={comment} key={comment.id}/>)
            }
        </>
    );
};