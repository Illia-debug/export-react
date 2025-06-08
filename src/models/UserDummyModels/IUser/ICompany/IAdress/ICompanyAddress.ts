import type {RootObjectCompanyAddressCoordinates} from "./ICoordinates/ICompanyAddressCoordinate.ts";

export interface RootObjectCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: RootObjectCompanyAddressCoordinates;
    country: string;
}