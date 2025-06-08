import {type FC, useEffect, useState} from "react";
import type {IUserDummy} from "../../../models/UserDummyModels/IUser/IUserDummy.ts";
import {service} from "../../../services/Api.services.ts";
import {UserDummy} from "../UserComponent/UserDummy.tsx";

export const UsersDummy:FC = () => {
    const [users, setUsers] = useState<IUserDummy[]>([])
    useEffect(() => {
        service.getUsersDummy().then((allUsers)=>{
            setUsers(allUsers)
        })
    }, []);
    return (
        <>
            {
                users.map(user=><UserDummy item={user} key={user.id}/>)
            }
        </>
    );
};