import type {ProductPropType} from "../../Product/Product.tsx";
import type {FC} from "react";

const Metas: FC<ProductPropType> = ({item}: ProductPropType) => {
    return (
        <>
            <li>createdAt: {item.meta.createdAt}</li>
            <li>updatedAt: {item.meta.updatedAt}</li>
            <li>barcode: {item.meta.barcode}</li>
            <img src={item.meta.qrCode} alt="qr-code"/>
        </>
    );
};
export default Metas