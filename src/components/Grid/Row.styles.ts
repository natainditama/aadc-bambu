import styled from "styled-components";

const RowStyles = styled.div`
  --gap-x: 1.5rem;
  --gap-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--gap-y));
  margin-right: calc(-0.5 * var(--gap-x));
  margin-left: calc(-0.5 * var(--gap-x));
`;

export { RowStyles };
