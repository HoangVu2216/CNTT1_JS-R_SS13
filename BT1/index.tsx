import React, { Component } from "react";
interface State {
    fullName: string;
}
class Exercises01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: "Lê Hữu Nhật Hào",
        };
    }
    render() {
        return (
            <div>
                <h2>Họ và tên: {this.state.fullName}</h2>
            </div>
        );
    }
}
export default Exercises01;