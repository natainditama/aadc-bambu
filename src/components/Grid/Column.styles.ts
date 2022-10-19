import styled from "styled-components";
import React, { HTMLAttributes } from "react";

const columnWidth = [
  "auto",
  "8.33333333%",
  "16.66666667%",
  "25%",
  "33.33333333%",
  "41.66666667%",
  "50%",
  "58.33333333%",
  "66.66666667%",
  "75%",
  "83.33333333%",
  "91.66666667%",
  "100%",
];

type ColSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
}

const ColStyles = styled.div<ColProps>`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--gap-x) * 0.5);
  padding-left: calc(var(--gap-x) * 0.5);
  margin-top: var(--gap-y);
  width: ${({ xs }: ColProps) => columnWidth[xs ?? 12]};
  flex: ${({ xs }: ColProps) => (xs ? "0 0 auto" : "1 0 0%")};
  @media screen and (min-width: 640px) {
    & {
      width: ${({ sm, xs }: ColProps) => (sm ? columnWidth[sm ?? 12] : columnWidth[xs ?? 12])};
      flex: ${({ xs }: ColProps) => (xs ? "0 0 auto" : "1 0 0%")};
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: ${({ md, xs }: ColProps) => (md ? columnWidth[md ?? 12] : columnWidth[xs ?? 12])};
      flex: ${({ xs }: ColProps) => (xs ? "0 0 auto" : "1 0 0%")};
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: ${({ lg, xs }: ColProps) => (lg ? columnWidth[lg ?? 12] : columnWidth[xs ?? 12])};
      flex: ${({ xs }: ColProps) => (xs ? "0 0 auto" : "1 0 0%")};
    }
  }
`;

ColStyles.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
};

export { ColStyles, ColProps };
