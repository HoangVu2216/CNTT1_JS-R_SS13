import React from "react";
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
interface ChildrenProps {
    product: Product;
}
const Children_Comp: React.FC<ChildrenProps> = ({ product }) => {
    return (
        <div>
            <h2>Dữ liệu trong component con</h2>
            <p>Id: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Price: {product.price.toLocaleString()} đ</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
};
export default Children_Comp;   