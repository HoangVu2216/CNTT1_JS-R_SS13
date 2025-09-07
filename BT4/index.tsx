import React from "react";
interface ChildrenProps {
    name: string;
}
const Children_Comp: React.FC<ChildrenProps> = ({ name }) => {
    return (
        <div>
            <h2>Họ và tên bên component con: {name}</h2>
        </div>
    );
};
export default Children_Comp;