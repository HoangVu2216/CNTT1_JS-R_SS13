import React, { Component } from "react";

interface ChildrenProps {
    name: string;
}

class Children_Comp extends Component<ChildrenProps> {
    render() {
        return (
            <div>
                <h2>Họ và tên bên component con: {this.props.name}</h2>
            </div>
        );
    }
}

export default Children_Comp;
