// rfc = snippet default
import React from "react";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4?: string;
}

const Menu = ({ op1, op2, op3, op4 } : IMenu) => {
  return (
    <ul className="text-medium">
      <li>{ op1 }</li>
      <li>{ op2 }</li>
      <li>{ op3 }</li>
      <li>{ op4 }</li>
    </ul>
  );
};

export default Menu;
