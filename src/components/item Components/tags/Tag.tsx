import type {FC} from "react";

type TagPropType={
    itemTag: string;
}
const Tag:FC<TagPropType> = ({itemTag}:TagPropType) => {
    return (
        <>
            <li>{itemTag}</li>
        </>
    );
};
export default Tag