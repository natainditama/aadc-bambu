import React, { HTMLAttributes, ReactNode } from "react";
import { RowStyles } from "./Row.styles";
import Container from "../Container/Container";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  container?: boolean;
  justify?: "center" | "end" | "start";
}

const Row = ({ children, container, ...props }: Props) => {
  if (container) {
    return (
      <Container>
        <RowStyles {...props}>{children}</RowStyles>
      </Container>
    );
  }
  return <RowStyles {...props}>{children}</RowStyles>;
};

export default Row;
