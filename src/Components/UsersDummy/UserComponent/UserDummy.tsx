import type {IUserDummy} from "../../../models/UserDummyModels/IUser/IUserDummy.ts";
import type {FC} from "react";

type UserDummyPropsType={
    item:IUserDummy
}
export const UserDummy:FC<UserDummyPropsType> = ({item}:UserDummyPropsType) => {
    return (
        <>
            <div>Id: {item.id}</div>
            <div>FirstName: {item.firstName}</div>
            <div>LastName: {item.lastName}</div>
            <div>MaidenName: {item.maidenName}</div>
            <div>Age: {item.age}</div>
            <div>Gender: {item.gender}</div>
            <div>Email: {item.email}</div>
            <div>Phone: {item.phone}</div>
            <div>Username: {item.username}</div>
            <div>Password: {item.password}</div>
            <div>BirthDate: {item.birthDate}</div>
            <img src={item.image} alt="symbol"/>
            <div>BloodGroup: {item.bloodGroup}</div>
            <div>Height: {item.height}</div>
            <div>Weight: {item.weight}</div>
            <div>Eye color: {item.eyeColor}</div>

            <ul>Hair:
                <li>Color: {item.hair.color}</li>
                <li>Type: {item.hair.type}</li>
            </ul>

            <div>Ip: {item.ip}</div>

            <ul>Address list:
                <li>Address:{item.address.address}</li>
                <li>City:{item.address.city}</li>
                <li>State:{item.address.state}</li>
                <li>State Code:{item.address.stateCode}</li>
                <li>Postal Code:{item.address.postalCode}</li>
                <ul>Coordinates:
                    <li>Lat: {item.address.coordinates.lat}</li>
                    <li>Lng: {item.address.coordinates.lng}</li>
                </ul>
                <li>Country: {item.address.country}</li>
            </ul>

            <div>Mac Address: {item.macAddress}</div>
            <div>University: {item.university}</div>

            <ul>Banks List:
                <li>Card Expire: {item.bank.cardExpire}</li>
                <li>Card Number: {item.bank.cardNumber}</li>
                <li>Card Type: {item.bank.cardType}</li>
                <li>Currency: {item.bank.currency}</li>
                <li>Iban: {item.bank.iban}</li>
            </ul>

            <ul>Company:
                <li>Department: {item.company.department}</li>
                <li>Name: {item.company.name}</li>
                <li>Title: {item.company.title}</li>
                <ul>Address:
                    <li>Address: {item.company.address.address}</li>
                    <li>City: {item.company.address.city}</li>
                    <li>State: {item.company.address.state}</li>
                    <li>State Code: {item.company.address.stateCode}</li>
                    <li>Postal Code: {item.company.address.postalCode}</li>
                    <ul>Coordinates:
                        <li>Lat: {item.company.address.coordinates.lat}</li>
                        <li>Lng: {item.company.address.coordinates.lng}</li>
                    </ul>
                    <li>Country: {item.company.address.country}</li>
                </ul>
            </ul>

            <li>ein: {item.ein}</li>
            <li>ssn: {item.ssn}</li>
            <li>User Agent: {item.userAgent}</li>

            <ul>Crypto:
                <li>Coin: {item.crypto.coin}</li>
                <li>Wallet: {item.crypto.wallet}</li>
                <li>Network: {item.crypto.network}</li>
            </ul>

            <li>Role: {item.role}</li>
            <hr/>
        </>
    );
};