import type {ProductPropType} from "../../Product/Product.tsx";
import type {FC} from "react";
import Tag from "./Tag.tsx";
const Tags:FC<ProductPropType> = ({item}:ProductPropType) => {
    return (
        <>

            {item.tags.map((field: string, index: number) => <Tag itemTag={field} key={index}/>)}
        </>
    );
};
export default Tags