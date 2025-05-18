import type {ProductPropType} from "../../Product/Product.tsx";
import type {FC} from "react";
import Review from "./Review.tsx";
import type {RootObjectProductsReviews} from "../../../modules/IProduct.ts";

 const Reviews: FC<ProductPropType> = ({item}: ProductPropType) => {
    return (
        <>
            {
                item.reviews.map((field:RootObjectProductsReviews,index:number)=><Review itemReview={field} key={index}/>)
            }
        </>
    );
};
export default Reviews