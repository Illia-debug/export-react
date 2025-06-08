import type {RootObjectAddress} from "./IAddress.ts";
import type {RootObjectCompany} from "./ICompany.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: RootObjectAddress;
	phone: string;
	website: string;
	company: RootObjectCompany;
}


