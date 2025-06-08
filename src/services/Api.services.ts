import {urlsDummy, urlsHolder} from "../constants/urls.ts";
import type {IUser} from "../models/UserHolderModels/IUser.ts";
import type {IUserDummy} from "../models/UserDummyModels/IUser/IUserDummy.ts";

export const service={
    getUsersHolder:async ():Promise<IUser[]>=>{
        return await fetch(urlsHolder.users.allUsers)
            .then((response)=>response.json())
    },
    getUsersDummy:async ():Promise<IUserDummy[]>=>{
     const responseUsers=await fetch(urlsDummy.users.allUsers)
         .then((response)=>response.json())
        return responseUsers.users
    }
}