import type {RootObjectHair} from "./IUserHair/IHairDummy.ts";
import type {RootObjectBank} from "./IBank/IBankDummy.ts";
import type {RootObjectCompany} from "./ICompany/ICompanyDummy.ts";
import type {RootObjectCrypto} from "./ICrupto/ICryptoDummy.ts";
import type {RootObjectAddress} from "./IUserAddress/IAddressDummy.ts";

export interface IUserDummy {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: RootObjectHair;
	ip: string;
	address: RootObjectAddress;
	macAddress: string;
	university: string;
	bank: RootObjectBank;
	company: RootObjectCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: RootObjectCrypto;
	role: string;
}







