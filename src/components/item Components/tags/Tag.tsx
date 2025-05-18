import type {FC} from "react";

type TagPropType={
    itemTag: string;
}
const Tag:FC<TagPropType> = ({itemTag}:TagPropType) => {
    console.log('1000000')
    return (
        <>
            <li>{itemTag}</li>
        </>
    );
};
export default Tag