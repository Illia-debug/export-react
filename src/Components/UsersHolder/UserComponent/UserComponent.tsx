import type {IUser} from "../../../models/UserHolderModels/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    item: IUser
}
export const UserComponent: FC<UserPropsType> = ({item}: UserPropsType) => {
    return (
        <>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>username: {item.username}</div>
            <div>email: {item.email}</div>
            <div>phone: {item.phone}</div>
            <div>website: {item.website}</div>
            <div>
                <ul>adress:
                    <li>street: {item.address.street}</li>
                    <li>suite: {item.address.suite}</li>
                    <li>city: {item.address.city}</li>
                    <li>zipcode: {item.address.zipcode}</li>
                    <ul>geo:
                        <li>lat: {item.address.geo.lat}</li>
                        <li>lng: {item.address.geo.lng}</li>
                    </ul>
                </ul>
            </div>
            <hr/>
        </>
    );
};