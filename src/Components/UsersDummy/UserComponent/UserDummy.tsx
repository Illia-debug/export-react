import type {IUserDummy} from "../../../models/UserDummyModels/IUser/IUserDummy.ts";
import type {FC} from "react";

type UserDummyPropsType={
    item:IUserDummy
}
export const UserDummy:FC<UserDummyPropsType> = ({item}:UserDummyPropsType) => {
    return (
        <>
        <div>{item.firstName}</div>
        </>
    );
};