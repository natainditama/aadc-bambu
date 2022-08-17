import React, { HTMLAttributes, ReactNode } from "react";
import { ContainerStyle } from "./Container.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ children, ...props }: Props) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
