import type {RootObjectAddressGeo} from "./IGeo.ts";

export interface RootObjectAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: RootObjectAddressGeo;
}