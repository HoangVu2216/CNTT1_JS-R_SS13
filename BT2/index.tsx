import React, { Component } from "react";

// Định nghĩa kiểu dữ liệu cho state
interface State {
    id: number;
    name: string;
    birthday: string;
    address: string;
}

class Exercise02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        // Khởi tạo state với thông tin cá nhân
        this.state = {
            id: 1,
            name: "Nguyễn Văn Sơn",
            birthday: "20/12/2023",
            address: "Thanh Xuân, Hà Nội",
        };
    }

    render() {
        return (
            <div style={{ margin: "30px" }}>
                <h2 style={{ fontWeight: "bold" }}>Thông tin cá nhân</h2>
                <p><strong>id:</strong> {this.state.id}</p>
                <p><strong>Tên:</strong> {this.state.name}</p>
                <p><strong>Ngày sinh:</strong> {this.state.birthday}</p>
                <p><strong>Địa chỉ:</strong> {this.state.address}</p>
            </div>
        );
    }
}

export default Exercise02;
