import {useEffect, useState} from "react";
import type {IProduct} from "../../modules/IProduct.ts";
import {getProducts} from "../../modules/services/api.services.ts";
import Product from "../Product/Product.tsx";

 const Products = () => {
     console.log('222222222222222222222222222222')

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response);
            });
    }, []);
    return (
        <>
            {
                products.map((product:IProduct)=><Product item={product} key={product.id}/>)
            }
        </>
    );
};
export default Products