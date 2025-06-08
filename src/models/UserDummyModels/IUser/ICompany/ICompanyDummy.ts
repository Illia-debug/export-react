import type {RootObjectCompanyAddress} from "./IAdress/ICompanyAddress.ts";

export interface RootObjectCompany {
    department: string;
    name: string;
    title: string;
    address: RootObjectCompanyAddress;
}