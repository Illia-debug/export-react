import type {IProduct, IResponse} from "../IProduct.ts";

const getProducts = async (): Promise<IProduct[]> => {
    const response: IResponse = await fetch(import.meta.env.VITE_API_URL)
        .then((value) => value.json());
    return response.products;
}
export {
    getProducts
}