// rfc = snippet default
import React from "react";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1?: string;
    op2?: string;
    op3?: string;
    op4?: string; // ? permite ser vazio
}

const Menu = ({ op1, op2, op3, op4 } : IMenu) => {
  return (
    <nav>
      <Link href={ROUTES.home}>{op1}</Link>
      <Link href={ROUTES.noHookPage}>{op2}</Link>
    </nav>
  );
};

export default Menu;
