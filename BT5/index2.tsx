import React, { Component } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ChildrenProps {
    product: Product;
}

class Children_Comp extends Component<ChildrenProps> {
    render() {
        const { id, name, price, quantity } = this.props.product;

        return (
            <div>
                <h3>Dữ liệu trong component con</h3>
                <p>Id: {id}</p>
                <p>Product name: {name}</p>
                <p>Price: {price.toLocaleString()} đ</p>
                <p>Quantity: {quantity}</p>
            </div>
        );
    }
}

export default Children_Comp;
