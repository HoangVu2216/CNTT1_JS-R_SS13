import React, { Component } from "react";

// Định nghĩa kiểu dữ liệu cho state
interface State {
    name: string;
}

class Exercises01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        // Khởi tạo state với tên của bản thân
        this.state = {
            name: "Nguyễn Minh Sơn",
        };
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Họ và tên: {this.state.name}</h1>
            </div>
        );
    }
}

export default Exercises01;
