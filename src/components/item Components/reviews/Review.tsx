import type {FC} from "react";
import type {RootObjectProductsReviews} from "../../../modules/IProduct.ts";

 type ReviewPropType={
    itemReview:RootObjectProductsReviews
}


 const Review:FC<ReviewPropType> = ({itemReview}:ReviewPropType) => {
    return (
        <>
            <li>rating: {itemReview.rating}</li>
            <li>{itemReview.comment}</li>
            <li>{itemReview.date}</li>
            <li>{itemReview.reviewerName}</li>
            <li>{itemReview.reviewerEmail}</li>
        </>
    );
};
export default Review