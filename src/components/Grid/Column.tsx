import React, { ReactNode } from "react";
import { ColStyles } from "./Column.styles";
import type { ColProps } from "./Column.styles";

interface Props extends ColProps {
  children: ReactNode;
}

const Column = ({ children, ...props }: Props) => {
  return <ColStyles {...props}>{children}</ColStyles>;
};

export default Column;
