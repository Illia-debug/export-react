import {type FC, useEffect, useState} from "react";
import type {IUser} from "../../../models/UserHolderModels/IUser.ts";
import {service} from "../../../services/Api.services.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";

export const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        service.getUsersHolder().then((allUsers) => {
            setUsers(allUsers)
        })
    }, []);
    return (
        <>
            {
                users.map((user)=><UserComponent item={user} key={user.id}/>)
            }
        </>
    );
};