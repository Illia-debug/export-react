import type {IProduct} from "../../modules/IProduct.ts";
import type {FC} from "react";
import Tags from "../item Components/tags/Tags.tsx";
import {Dimensions} from "../item Components/dimensions/Dimensions.tsx";
import Reviews from "../item Components/reviews/Reviews.tsx";
import Meta from "../item Components/meta/Meta.tsx";

export type ProductPropType = {
    item: IProduct
}
const Product: FC<ProductPropType> = ({item}: ProductPropType) => {
    console.log('1')
    return (
        <>

            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.category}</div>
            <div>{item.price}</div>
            <div>{item.discountPercentage}</div>
            <div>{item.rating}</div>
            <div>{item.stock}</div>
            <div>{item.brand}</div>
            <div>{item.sku}</div>
            <div>{item.weight}</div>
            <div>{item.warrantyInformation}</div>
            <div>{item.shippingInformation}</div>
            <div>{item.availabilityStatus}</div>
            <div>{item.returnPolicy}</div>
            <div>{item.returnPolicy}</div>
            <div>{item.minimumOrderQuantity}</div>
            <div>{item.thumbnail}</div>
            <ul>
                Tags:
                <Tags item={item}/>
            </ul>
            <ul>
                Dimensions:
                <Dimensions item={item}/>
            </ul>
            <ul>
                Reviews:
                <Reviews item={item}/>

            </ul>
            <ul>
                Meta:
                <Meta item={item}/>
            </ul>
            <img src={item.images[0]} alt="product"/>

        </>
    );
};
export default Product