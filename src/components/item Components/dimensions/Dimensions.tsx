import type {FC} from "react";
import type{ProductPropType} from "../../Product/Product.tsx";

export const Dimensions:FC<ProductPropType> = ({item}:ProductPropType) => {
    return (
        <>
            depth:   {item.dimensions.depth};
            width:  {item.dimensions.width};
            height: {item.dimensions.height};
        </>
    );
};