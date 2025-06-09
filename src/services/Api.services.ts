import {urlsDummy, urlsHolder} from "../constants/urls.ts";
import type {IUser} from "../models/UserHolderModels/IUser.ts";
import type {IUserDummy} from "../models/UserDummyModels/IUser/IUserDummy.ts";
import type {IPostHolder} from "../models/PostsHolder/IPostsHolder.ts";
import type {IPostDummy} from "../models/postDummy/IPostDummy.ts";
import type {ICommentsHolder} from "../models/commentsHolder/ICommentsHolder.ts";
import type {ICommentsDummy} from "../models/CommentsDummy/ICommentsDummy.ts";

export const service={
    getUsersHolder:async ():Promise<IUser[]>=>{
        return await fetch(urlsHolder.users.allUsers)
            .then((response)=>response.json())
    },
    getUsersDummy:async ():Promise<IUserDummy[]>=>{
     const responseUsers=await fetch(urlsDummy.users.allUsers)
         .then((response)=>response.json())
        return responseUsers.users
    },
    getPostsHolder: async (): Promise<IPostHolder[]> => {
        return await fetch(urlsHolder.posts.allPosts)
            .then((response)=>response.json())
    },
    getPostsDummy:async ():Promise<IPostDummy[]>=>{
        const responsePosts=await fetch(urlsDummy.posts.allPosts)
            .then((response) =>response.json())
        return responsePosts.posts
    },
    getCommentsHolder:async ():Promise<ICommentsHolder[]>=>{
        return await fetch(urlsHolder.comments.allComments)
            .then((response)=>response.json())
    },
    getCommentsDummy:async ():Promise<ICommentsDummy[]>=>{
        const responseComment = await fetch(urlsDummy.comments.allComments)
            .then((response) => response.json());
        return responseComment.comments
    }
}