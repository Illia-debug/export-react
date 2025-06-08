import type {RootObjectAddressCoordinates} from "./ICoordinares/ICoordinatesDummy.ts";

export interface RootObjectAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: RootObjectAddressCoordinates;
    country: string;
}