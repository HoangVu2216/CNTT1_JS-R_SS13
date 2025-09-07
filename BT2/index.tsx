import React, {Component} from "react";
interface State {
    id: number;
    fullName: string;
    BOD: string;
    address: string;
}
class Exercises02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            fullName: "Lê Hữu Nhật Hào",
            BOD: "10/07/2006",
            address: "Đồng Xoài, Bình Phước",
        };
    }
    render() {
        return  (
            <div>
                <h2>Mã sinh viên: {this.state.id}</h2>
                <h2>Họ và tên: {this.state.fullName}</h2>
                <h2>Ngày sinh: {this.state.BOD}</h2>
                <h2>Địa chỉ: {this.state.address}</h2>
            </div>
        );
    }
}
export default Exercises02;