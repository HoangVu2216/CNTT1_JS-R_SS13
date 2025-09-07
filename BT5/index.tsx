import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ParentState {
    product: Product;
}

class Parent_Comp extends Component<{}, ParentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Bưởi ba roi",
                price: 12000,
                quantity: 6,
            },
        };
    }

    render() {
        return (
            <div>
                <Children_Comp product={this.state.product} />
            </div>
        );
    }
}

export default Parent_Comp;
