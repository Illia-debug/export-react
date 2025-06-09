import type {IPostDummy} from "../../../models/postDummy/IPostDummy.ts";
import type {FC} from "react";

type PostDummyPropsType = {
    item: IPostDummy
};

export const PostDummy: FC<PostDummyPropsType> = ({item}: PostDummyPropsType) => {
    return (
        <>
            <div>Id: {item.id}</div>
            <div>Title: {item.title}</div>
            <div>Body: {item.body}</div>
            <ul>Tags:
                <li>{item.tags[0]}</li>
                <li>{item.tags[1]}</li>
                <li>{item.tags[2]}</li>
            </ul>
            <ul>Reactions:
                <li>Likes: {item.reactions.likes}</li>
                <li>Dislikes: {item.reactions.dislikes}</li>
            </ul>
            <div>Views: {item.views}</div>
            <div>User Id: {item.userId}</div>
            <hr/>
        </>
    );
};